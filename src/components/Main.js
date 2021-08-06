import React, {useState} from "react";

import Button from "react-bootstrap/Button";

import Buffer from "./Buffer";
import Entry from "./Entry";

const Main = () => {

	const [entryList, addTheEntry] = useState([]);

	const onAddBtnPress = () => {
		addTheEntry(entryList.concat(<Entry />));
	};
	return(
		<div>
			<Button variant="info" onClick={onAddBtnPress}>Add Object</Button>
			<h1>Hello World! it's me, Pranav</h1>
			<Buffer />
			{ entryList }
		</div>
	);
}

export default Main;