/** @format */

import { Button } from "@mui/material";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import { SortProps } from "../Assets/Props";

const Sort = ({ handleSort }: SortProps) => {
	return (
		<Button
			onClick={handleSort}
			variant="outlined"
			startIcon={<ImportExportIcon />}
		>
			Sort
		</Button>
	);
};

export default Sort;
