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
			...entries,
			{
				id: uuidv4(),
				name: "Name",
				label: "Safety",
				number: "#",
				action: "Act",
				action_mod: "modifier",
				place: "Location",
				call: "Call"
			}
		]);
	}

	return (
		<form>
			<Button variant="info" onClick={setEntryListHandler} >Add Unit</Button>
			{/*<Button variant="info" >Edit</Button>*/}
		</form>
	);
}

export default Form;