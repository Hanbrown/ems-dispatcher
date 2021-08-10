import React, {useState} from "react";

import Button from "react-bootstrap/Button";

import Buffer from "./Buffer";
import Entry from "./Entry";

const Main = () => {

	const [entryList, addTheEntry] = useState([]);

	const onAddBtnPress = () => {
		addTheEntry(entryList.concat(<Entry />));
	};

	const isEmpty = entryList.length > 0;

	return(
		<div>
			<h1>EMS Dispatcher</h1>
			<Button variant="info" onClick={onAddBtnPress}>Add Object</Button>
			<hr />
			<Buffer />
			{ isEmpty ? entryList : <h4>Click the <em>Add object</em> button to start</h4> }
		</div>
	);
}

export default Main;