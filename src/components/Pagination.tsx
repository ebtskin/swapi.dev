import {useState} from 'react'
import { Button } from "@mui/material";
import PageButton from "../components/PageButton";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const Pagination = ({
	pageCount,
	isPreviousData,
	page,
	setPage,
}: {
	pageCount: number;
	isPreviousData: boolean;
	page: number;
	setPage: React.Dispatch<React.SetStateAction<number>>;
}) => {


	const totalPages = Math.ceil(pageCount / 10) || null;

	//setting up pagination
	let pageArray;
	if (totalPages) {
		pageArray = Array.from(Array(totalPages), (_, i) => i + 1);
	}

	const lastPage = () => setPage(Number(totalPages));
	const firstPage = () => setPage(1);
	return (
		<>
			<Button
				variant="contained"
				onClick={firstPage}
				disabled={isPreviousData || page === 1}
			>
				<KeyboardDoubleArrowLeftIcon />
			</Button>

			{pageArray?.map((page) => (
				<PageButton key={page} page={page} setPage={setPage} />
			))}
			<Button
				variant="contained"
				onClick={lastPage}
				disabled={isPreviousData || page === totalPages}
			>
				<KeyboardDoubleArrowRightIcon />
			</Button>
		</>
	);
};

export default Pagination