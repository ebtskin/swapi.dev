/** @format */

import { Button } from "@mui/material";

const PageButton = ({
	page,
	setPage,
}: {
	page: number;
	setPage: React.Dispatch<React.SetStateAction<number>>;
}) => {
	return <Button variant="outlined" onClick={() => setPage(page)}>{page}</Button>;
};

export default PageButton;
