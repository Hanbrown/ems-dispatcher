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
	const [entries, setEntryList] = useState([]); // The master list of entries (unfiltered)

	return (
		<Row>
			<Col lg={{ span: 10, offset: 1 }}>
				<h1>EMS Dispatcher</h1>
				<Form entries={entries} setEntryList={setEntryList} />
				<hr />
				<EntryList entries={entries} setEntryList={setEntryList} />
				{/* isEmpty ? entryList : <h4>Click the <em>Add object</em> button to start</h4> */}
			</Col>
		</Row>
	);
}

export default App;