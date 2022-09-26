import './App.css';
import { StarWar } from './Pages/StarWar';
import {TableList} from './components/TableList';
import { Paper } from "@mui/material";
import {useState} from "react";
import {ViewProps} from "./Assets/Props";
import { CardList } from "./components/CardList";


function App() {
	const [title, setTitle] = useState<string>('');
	const [view, setView] = useState<ViewProps>('module');

	const onToggleView = (view: ViewProps) => {
		setView(view);
	}
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
				<StarWar
					title={title}
					setTitle={setTitle}
					onToggleView={onToggleView}
					view={view}
				/>
				{view === "module" ? (
					<TableList title={title || "people"} />
				) : (
					<CardList title={title || "people"} />
				)}
			</div>
		</Paper>
  );
}

export default App;
