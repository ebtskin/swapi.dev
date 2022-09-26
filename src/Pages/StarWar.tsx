
//Starting page

import React, {useState} from 'react';
import {Stack,Typography, ToggleButtonGroup, ToggleButton} from '@mui/material';
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import TitleButton from "../components/TitleButton";
import { options } from '../Assets/Data';

export const StarWar = ({
	setTitle, title
}: {
	title: string,
	setTitle: React.Dispatch<React.SetStateAction<string>>;
}) => {
	const [view, setView] = useState<string>("list");

	const handleToggleView = (
		event: React.MouseEvent<HTMLElement>,
		nextView: string
	) => {
		setView(nextView);
	};

	return (
		<>
			<Stack
				direction="row"
				spacing={2}
				justifyContent="space-between"
				sx={{
					borderBottom: 3,
					borderColor: "#e8e8e8",
					paddingBottom: 4,
				}}
			>
				<TitleButton setTitle={setTitle} options={options} />
				<Typography variant="h4" color="rgba(6, 147, 220, 255)">
					{title ? title : "people"}
				</Typography>

				<ToggleButtonGroup
					value={view}
					exclusive
					onChange={handleToggleView}
				>
					<ToggleButton value="list" aria-label="list">
						<ViewListIcon />
					</ToggleButton>
					<ToggleButton value="module" aria-label="module">
						<ViewModuleIcon />
					</ToggleButton>
				</ToggleButtonGroup>
			</Stack>
		</>
	);
};
