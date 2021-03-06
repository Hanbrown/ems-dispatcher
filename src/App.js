import React, {useState} from "react";
import "./components/SCSS/App.scss";

// Import BS Components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Import Custom Components
import EntryList from "./components/EntryList";
import Nav from "./components/Nav";
import Button from "react-bootstrap/Button";

function App() {

	/** States **/
	// const [entries, setEntryList] = useState([]); // The master list of entries
	const [groups, setGroups] = useState([]); // The list of groups
	const [filter, setFilter] = useState({key: "color", value: /(\w)*/}); // Filter shows everything by default
	const [defaultGroupName, setDefaultGroupName] = useState({id: "", name: "Default"}); // Name of the default group

	// Allow user to cancel page reload
	/*window.onbeforeunload = function() {
		return true;
	}*/

	return (
		<Row>
			<Col lg={{ span: 10, offset: 1 }}>
				<h1>EMS Dispatcher Beta</h1>
				<Nav
					// entries={entries} setEntryList={setEntryList}
					groups={groups} setGroups={setGroups}
					setFilter={setFilter}
					defaultGroupName={defaultGroupName}
				/>
				<hr />
				<EntryList
					// entries={entries} setEntryList={setEntryList}
					groups={groups} setGroups={setGroups}
					filter={filter}
					defaultGroupName={defaultGroupName} setDefaultGroupName={setDefaultGroupName}
				/>
				<br />
				<hr />
				<footer>
					<p>2021 Pranav Rao <a href={"http://www.vanarp.com"} target={"_blank"}>vanarp.com</a>.</p>
				</footer>
			</Col>
		</Row>
	);
}

export default App;