/** @format */

import { useState, useEffect } from "react";
import TRow from "./TableRow";
import {
	Stack,
	Button,
	Paper,
	Table,
	TableBody,
	TableContainer,
	Typography,
} from "@mui/material";
import TableHeading from "../components/TableHeading";
import PageButton from "../components/PageButton";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { useStarWars } from "../hooks/useStarWars";
import Loading from "./Loading";
import { RowProps } from "../Assets/Props";
import SearchItem from "../components/SearchBar";
import Sort from "./Sort";
import { IStartWar } from "../Assets/Props";

export function TableList({ title }: { title: string }) {
	const [page, setPage] = useState<number>(1);
	const [listData, setListData] = useState<RowProps | any>([]);
	const [expand, setExpand] = useState<boolean>(false);
	const [search, setSearch] = useState<string>("");
	const [searchResult, setSearchResult] = useState([]);

	const {
		isLoading,
		isError,
		data: starWarsData,
		isPreviousData,
	} = useStarWars({ title, page, expand });

	useEffect(() => {
		const filteredResult = listData?.filter((item: IStartWar) => {
			if (item?.name) {
				return item.name
					.toLocaleLowerCase()
					.includes(search.toLocaleLowerCase());
			}
			return item?.title
				?.toLocaleLowerCase()
				.includes(search.toLocaleLowerCase());
		});
		setSearchResult(filteredResult);
	}, [search, listData]);

	useEffect(() => {
		setListData(starWarsData?.results);
	}, [starWarsData]);

	const handleDelete = (deleteId: string) => {
		if (deleteId) {
			const newList = listData.filter((item: RowProps) => {
				return item?.name !== deleteId;
			});
			setListData(newList);
		}
	};

	const handleSort = () => {
		const sortedList = listData.sort((item1: RowProps, item2: RowProps) => {
			return item1.name.localeCompare(item2.name);
		});
		setSearchResult(sortedList);
	};

	const totalPages = Math.ceil(starWarsData?.count / 10) || null;

	//setting up pagination
	let pageArray;
	if (totalPages) {
		pageArray = Array.from(Array(totalPages), (_, i) => i + 1);
	}

	const lastPage = () => setPage(Number(totalPages));
	const firstPage = () => setPage(1);

	//Loading spinner
	if (isLoading) {
		return <Loading size="15rem" />;
	}

	if (isError) {
		return (
			<Stack direction="row" justifyContent="center">
				<Typography variant="h2">An error has occured!</Typography>
			</Stack>
		);
	}

	return (
		<>
			<Stack>
				<SearchItem
					search={search}
					setSearch={(event) => setSearch(event.target.value)}
					handleSort={handleSort} 
				/>
			</Stack>

			{!listData && (
				<Stack direction="row">
					<Typography variant="h2">Empty List</Typography>)
				</Stack>
			)}
			{listData && (
				<Stack>
					<TableContainer component={Paper}>
						<Table aria-label="collapsible table">
							<TableHeading heading={Object.keys(listData[0])} />
							<TableBody>
								{searchResult?.map((person: RowProps) => (
									<TRow
										key={person.name}
										row={person}
										handleDelete={handleDelete}
									/>
								))}
							</TableBody>
						</Table>
					</TableContainer>

					<Stack direction="row" sx={{ marginTop: 3 }}>
						<Button
							variant="contained"
							onClick={firstPage}
							disabled={isPreviousData || page === 1}
						>
							<KeyboardDoubleArrowLeftIcon />
						</Button>

						{pageArray?.map((page) => (
							<PageButton
								key={page}
								page={page}
								setPage={setPage}
							/>
						))}
						<Button
							variant="contained"
							onClick={lastPage}
							disabled={isPreviousData || page === totalPages}
						>
							<KeyboardDoubleArrowRightIcon />
						</Button>
					</Stack>
				</Stack>
			)}
		</>
	);
}
