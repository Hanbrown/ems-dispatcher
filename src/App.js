import React, {useEffect, useState} from "react";
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
	const [groups, setGroups] = useState([]); // The list of groups
	const [defaultGroupName, setDefaultGroupName] = useState({id:"", name:"Default"}); // Name of the default group
	const [filter, setFilter] = useState({key: "color", value: /(\w)*/}); // Filter shows everything by default

	// Update groups list every time entry list is updated
	// useEffect(() => {
	// 	groups.map(group => {
	// 		group.members = [];
	// 	});
	//
	// 	entries.map(entry => {
	// 		groups.filter(group => entry.group === group.id)[0].members.push(entry);
	// 	});
	// }, [entries]);

	// Allow user to cancel page reload
	/*window.onbeforeunload = function() {
		return true;
	}*/

	return (
		<Row>
			<Col lg={{ span: 10, offset: 1 }}>
				<h1>EMS Dispatcher Beta</h1>
				<Form
					entries={entries} setEntryList={setEntryList}
					groups={groups} setGroups={setGroups}
					defaultGroupName={defaultGroupName} setDefaultGroupName={setDefaultGroupName}
					filter={filter} setFilter={setFilter}
				/>
				<hr />
				<EntryList
					entries={entries} setEntryList={setEntryList}
					groups={groups} setGroups={setGroups}
					filter={filter} setFilter={setFilter}
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