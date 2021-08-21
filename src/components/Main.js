import React, {useState} from "react";

import Button from "react-bootstrap/Button";

import Buffer from "./Buffer";
import Entry from "./Entry";

const Main = () => {

	const [entryList, addTheEntry] = useState([]);

	const onEntryBtnPress = () => {
		addTheEntry(entryList.concat(<Entry key={`entry-${indexEntry}`}/>));
		indexEntry++;
	};

	const onBuffBtnPress = () => {
		addTheEntry(entryList.concat(<Buffer key={`buff-${indexBuff}`} />));
		indexBuff++;
	}



	const isEmpty = entryList.length > 0;

	return(
		<>
			<h1>EMS Dispatcher</h1>
			<Button variant="info" onClick={onEntryBtnPress}>Add Object</Button>
			<Button variant="info" onClick={onBuffBtnPress}>Add Object</Button>
			<hr />
			<Buffer />
			{ isEmpty ? entryList : <h4>Click the <em>Add object</em> button to start</h4> }
		</>
	);
}

export default Main;