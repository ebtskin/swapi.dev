/** @format */
import { TableRow, TableCell, TableBody, Stack } from "@mui/material";
import { useStarWars } from "../hooks/useStarWars";

const CollapseInfo = ({
	title,
	page,
	expand,
}: {
	title: string;
	page: number;
	expand: boolean;
}) => {

	const { data: starWarsData } = useStarWars({ title, page, expand });

	return (
		<TableBody>
			<TableRow>
				<TableCell align="left">
					{title != "films"
						? starWarsData?.name
						: starWarsData?.title}
				</TableCell>
			</TableRow>
		</TableBody>
	);
};

export default CollapseInfo;
