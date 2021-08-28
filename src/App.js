import React, {useState} from "react";
import "./components/SCSS/App.scss";

// Import BS Components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Import Custom Components
import EntryList from "./components/EntryList";
import Form from "./components/Form";

function App() {

	/** States **/
	const [entries, setEntryList] = useState([]); // The master list of entries
	const [filter, setFilter] = useState({key: "color", value: /(\w)*/}); // Filter shows everything by default

	// Allow user to cancel page reload
	window.onbeforeunload = function() {
		return true;
	}

	return (
		<Row>
			<Col lg={{ span: 10, offset: 1 }}>
				<h1>EMS Dispatcher</h1>
				<Form entries={entries} setEntryList={setEntryList} filter={filter} setFilter={setFilter} />
				<hr />
				<EntryList entries={entries} setEntryList={setEntryList} filter={filter} setFilter={setFilter} />
			</Col>
		</Row>
	);
}

export default App;