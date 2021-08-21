import React, {useState} from "react";
import { v4 as uuidv4 } from "uuid";
import "./components/SCSS/App.scss";

// Import BS Components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

// Import Custom Components
import EntryList from "./components/EntryList";

function App() {

	/** States **/
	const [entries, setEntryList] = useState([]); // The master list of entries (unfiltered)

	const setEntryListHandler = (e) => {
		e.preventDefault();

		setEntryList([
			{
				id: uuidv4(),
				name: "Vickie",
				label: "Safety",
				number: 2,
				action: "10-8",
				action_mod: "on duty",
				place: "First Aid",
				call: ""
			}, ...entries
		]);
	}

	return (
		<Row>
			<Col lg={{ span: 10, offset: 1 }}>
				<h1>EMS Dispatcher</h1>
				<Button variant="info" onClick={setEntryListHandler} >Add</Button>
				<Button variant="info" >Edit</Button>
				<hr />
				<EntryList entries={entries} setEntryList={setEntryList} />
				{/* isEmpty ? entryList : <h4>Click the <em>Add object</em> button to start</h4> */}
			</Col>
		</Row>
	);
}

export default App;