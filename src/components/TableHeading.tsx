/** @format */

import { TableRow, TableHead, TableCell, Box} from "@mui/material";
import {IHeading} from "../Assets/Props";

const TableHeading = ({ heading }: IHeading) => {
	return (
		<TableHead sx={{ backgroundColor: "#e3f2fd" }}>
			<TableRow>
				{heading.map((title: string) => {
					if (title === "url") return;
					return (
						<TableCell key={title} align="center">
							<Box
								sx={{
									fontWeight: "bold",
									fontSize: 16,
									color: "#2196f3",
								}}
							>
								{title}
							</Box>
						</TableCell>
					);
				})}
				<TableCell align="center">
					<Box
						sx={{
							fontWeight: "bold",
							fontSize: 16,
							color: "#1565c0",
						}}
					>
						Action
					</Box>
				</TableCell>
			</TableRow>
		</TableHead>
	);
};

export default TableHeading;
