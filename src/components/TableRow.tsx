/** @format */
import { useState} from "react";

import { IconButton, TableCell, TableRow } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { format, parseISO} from "date-fns";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {RowProp} from "../Assets/Props";
import CollapseRow from "./CollapseRow";

function TRow({
	row,
	handleDelete,
}: {
	row: RowProp;
	handleDelete: (deleteId: string) => void;
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
					if (key === "url") return;
					if (
						key === "homeworld" ||
						key === "url" ||
						(typeof row[key as keyof RowProp] === "object" &&
							row[key as keyof RowProp].length > 0)
					) {
						return (
							<TableCell key={key} align="center">
								<IconButton
									aria-label="expand row"
									size="small"
									onClick={() =>
										handleExpand(
											row[key as keyof RowProp],
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
						typeof row[key as keyof RowProp] === "object" &&
						row[key as keyof RowProp].length === 0
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
							{row[key as keyof RowProp]}
						</TableCell>
					);
				})}
				<TableCell align="center">
					<DeleteForeverIcon
						onClick={() => handleDelete(row.name)}
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
