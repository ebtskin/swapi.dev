/** @format */
import { useState} from "react";

import { IconButton, TableCell, TableRow } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { format, parseISO} from "date-fns";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {IStartWar, RowProp} from "../Assets/Props";
import CollapseRow from "./CollapseRow";

function TRow({
	row,
	handleDelete,
}: {
	row: IStartWar;
	handleDelete: (deleteId: string | undefined) => void;
}) {
	const [expand, setExpand] = useState(false);
	const [expandInfo, setExpandInfo] = useState<any>([]);
	const [openTitle, setOpenTitle] = useState<string | "">("");

	const [title, setTitle] = useState<string>("");


	//set up open/close event by associating it with the title
	const handleExpand = (expandData: any, infoTitle: any) => {
		//single item when name is string and multiple item when name is object
		if (typeof expandData === "string") {
			setExpandInfo([expandData]);
			if (infoTitle == "homeworld") {
				setTitle("planets");
			} else {
				setTitle(infoTitle);
			}
		} else {
			setExpandInfo(expandData);
			setTitle(infoTitle);
		}

		if (openTitle == infoTitle) {
			setOpenTitle("");
		} else {
			setOpenTitle(infoTitle);
		}

	};

	return (
		<>
			<TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
				{Object.keys(row).map((key, index) => {
					let col = row[key as keyof IStartWar];
					if (key === "url") return;
					if (
						key === "homeworld" ||
						(Array.isArray(col) && col.length > 0)
					) {
						return (
							<TableCell key={key} align="center">
								<IconButton
									aria-label="expand row"
									size="small"
									onClick={() =>
										handleExpand(
											col,
											key
										)
									}
								>
									{openTitle == key ? (
										<KeyboardArrowUpIcon
											fontSize="large"
											color="error"
										/>
									) : (
										<KeyboardArrowDownIcon
											fontSize="large"
											color="primary"
										/>
									)}
								</IconButton>
							</TableCell>
						);
					} else if (
						Array.isArray(col) &&
						col.length === 0
					) {
						return (
							<TableCell key={key} align="center">
								None
							</TableCell>
						);
					}
					//format date field to be more readable
					if (key === "created" || key === "edited") {
						return (
							<TableCell key={key} align="right">
								{format(parseISO(row[key]), "PPpp")}
							</TableCell>
						);
					}
					//display regular cell without expand
					return (
						<TableCell key={key} align="center">
							{col}
						</TableCell>
					);
				})}
				<TableCell align="center">
					<DeleteForeverIcon
						onClick={() => row.name ? handleDelete(row?.name) : handleDelete(row?.title)}
						fontSize="large"
						sx={{ color: "#e91e63" }}
					/>
				</TableCell>
			</TableRow>

			<CollapseRow
				title={title}
				openTitle={openTitle}
				expandInfo={expandInfo}
			/>
		</>
	);
}

export default TRow;
