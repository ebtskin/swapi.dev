/** @format */

import { useState, useEffect } from "react";
import TRow from "./TableRow";
import {
	Stack,
	Paper,
	Table,
	TableBody,
	TableContainer,
	Typography,
} from "@mui/material";
import TableHeading from "../components/TableHeading";

import { useStarWars } from "../hooks/useStarWars";
import Loading from "./Loading";
import { RowProps } from "../Assets/Props";
import SearchItem from "../components/SearchBar";
import { IStartWar } from "../Assets/Props";
import Pagination from "./Pagination";

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
		const filteredResult = listData?.filter(
			(item: { name: string; title: string }) => {
				if (item?.name) {
					return item.name
						.toLocaleLowerCase()
						.includes(search.toLocaleLowerCase());
				}
				return item?.title
					?.toLocaleLowerCase()
					.includes(search.toLocaleLowerCase());
			}
		);
		setSearchResult(filteredResult);
	}, [search, listData]);

	useEffect(() => {
		setListData(starWarsData?.results);
	}, [starWarsData]);

	const handleDelete = (deleteId: string | undefined) => {
		if (deleteId) {
			const newList = listData.filter((item: IStartWar) => {
				return item?.name !== deleteId;
			});
			setListData(newList);
		}
	};

	const handleSort = () => {
		const sortedList = listData.sort(
			(item1: { name: string }, item2: { name: string }): number => {
				if (item1.name && item2.name) {
					return item1.name.localeCompare(item2.name);
				}
				return 0;
			}
		);
		setSearchResult(sortedList);
	};

	const totalPages = Math.ceil(starWarsData?.count / 10) || null;

	//Loading spinner
	if (isLoading) {
		return <Loading size="15rem" />;
	}

	if (isError) {
		return (
			<Stack direction="row" justifyContent="center">
				<Typography variant="h2">An error has occured</Typography>
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
				<Stack direction="row" justifyContent="center">
					<Typography variant="h2">Empty List</Typography>)
				</Stack>
			)}
			{listData && (
				<Stack>
					<TableContainer component={Paper}>
						<Table aria-label="collapsible table">
							<TableHeading heading={Object.keys(listData[0])} />
							<TableBody>
								{searchResult?.map(
									(starWarsData: IStartWar) => (
										<TRow
											key={
												starWarsData.name ||
												starWarsData.title
											}
											row={starWarsData}
											handleDelete={handleDelete}
										/>
									)
								)}
							</TableBody>
						</Table>
					</TableContainer>

					<Stack direction="row" sx={{ marginTop: 3 }}>
						<Pagination
							pageCount={starWarsData?.count}
							isPreviousData={isPreviousData}
							page={page}
							setPage={setPage}
						/>
					</Stack>
				</Stack>
			)}
		</>
	);
}
