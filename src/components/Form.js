import React from "react";
import { v4 as uuidv4 } from "uuid";

// Import BS Components
import Button from "react-bootstrap/Button";

// Stuff in the parentheses are the properties of this component
const Form = ({ entries, setEntryList } ) => {

	// All code is executed sequentially from here.

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
		<form>
			<Button variant="info" onClick={setEntryListHandler} >Add</Button>
			<Button variant="info" >Edit</Button>
		</form>
	);
}

export default Form;