/** @format */

import { Stack, TextField, Button, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {InputProps} from '../Assets/Props';
import Sort from "./Sort";


const SearchItem = ({ search, setSearch, handleSort }: InputProps) => {
	return (
		<Stack
		direction='row'
		spacing={2}
			sx={{
				padding: 3,
				marginTop: 4,
				marginBottom: 4,
				backgroundColor: "#f0f3f5",
				borderRadius: 2,
			}}
		>
			
			<form className="searchForm" onSubmit={(e) => e.preventDefault()}>
				<Stack direction="row" spacing={1}>
					<TextField
						id="search-bar"
						className="text"
						label=""
						variant="outlined"
						placeholder="Only name search available..."
						size="small"
						autoFocus
						value={search}
						onChange={setSearch}
						sx={{
							backgroundColor: 'white',
							width: '30rem'
						}}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<SearchIcon />
								</InputAdornment>
							),
						}}
					/>
					<Button
						variant="contained"
					>
						Search
					</Button>
					<Sort handleSort={handleSort}/>
				</Stack>
			</form>
		</Stack>
	);
};

export default SearchItem;

