/** @format */

import {
	Collapse,
	Table,
	TableCell,
	TableRow,
	Typography,
    Stack
} from "@mui/material";
import CollapseInfo from "../components/CollapseInfo";


const CollapseRow = ({title, openTitle, expandInfo}:{title: string, openTitle: string, expandInfo : []}) => {
	return (
		<>
			{title && (
				<TableRow>
					<TableCell
						style={{
							paddingBottom: 0,
							paddingTop: 0,
							backgroundColor: "#f0f3f5",
						}}
						colSpan={1}
					>
						<Collapse
							in={Boolean(openTitle)}
							timeout="auto"
							unmountOnExit
						>
							<Stack sx={{ margin: 1 }}>
								<Typography
									variant="h6"
									gutterBottom
									component="div"
									color="primary"
								>
									{title}
								</Typography>
								<Table size="small" aria-label="sub table">
									{expandInfo?.map((item: any) => {
										return (
											<CollapseInfo
												key={item}
												title={title}
												page={item.match(/\d+/g)}
												expand={Boolean(openTitle)}
											/>
										);
									})}
								</Table>
							</Stack>
						</Collapse>
					</TableCell>
				</TableRow>
			)}
		</>
	);
};

export default CollapseRow;
