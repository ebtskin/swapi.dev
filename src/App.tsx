import './App.css';
import { StarWar } from './Pages/StarWar';
import {TableList} from './components/TableList';
import { Paper } from "@mui/material";
import {useState} from "react";

function App() {
	const [title, setTitle] = useState<string>('');
  return (
		<Paper
			sx={{
				padding: "32px",
				width: "100vw",
				margin: "10px",
				borderTop: 5,
				borderColor: "#3c8dbc",
			}}
		>
			<div className="App">
				<StarWar title={title} setTitle={setTitle}/>
				<TableList title={title || "people"}/>
			</div>
		</Paper>
  );
}

export default App;
