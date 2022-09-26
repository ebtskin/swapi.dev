/** @format */

import { TableRow, TableHead, TableCell, Box} from "@mui/material";

const TableHeading = ({ heading }: { heading: any }) => {
	return (
		<TableHead sx={{ backgroundColor: "green" }}>
			<TableRow>
				{heading.map((title: any) => {
					if(title === 'url') return;
					return (
						<TableCell key={title} align="center">
							<Box sx={{ fontWeight: "bold", fontSize: 16 }}>
								{title}
							</Box>
						</TableCell>
					);
				})}
				<TableCell align="center">
					<Box sx={{ fontWeight: "bold", fontSize: 16 }}>Action</Box>
				</TableCell>
			</TableRow>
		</TableHead>
	);
};

export default TableHeading;
