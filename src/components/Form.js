import React from "react";
import { v4 as uuidv4 } from "uuid";

// Import BS Components
import Button from "react-bootstrap/Button";

// Stuff in the parentheses are the properties of this component
const Form = ({ entries, setEntryList, filter, setFilter } ) => {

	// All code is executed sequentially from here.

	// Add a new entry
	const setEntryListHandler = (e) => {
		e.preventDefault();

		setEntryList([
			...entries,
			{
				id: uuidv4(),
				name: "",
				rank: "",
				number: "",
				action: "",
				action_mod: "",
				place: "",
				call: "",
				color: "",
				updated: new Date(),
				group: "",
			}
		]);
	}

	// Sort by Med/Safety number
	const sortEntryList = () => {
		entries.sort( (a, b) => (parseInt(a.number) - parseInt(b.number)) );
		setEntryList(entries.map(item => {
			return item;
		}));
	}

	// Set the filtered entries to those currently available
	const showAvailable = () => {
		setFilter({key: "color", value: /green/});
	}

	// Set filtered entries to all entries
	const showAllEntries = () => {
		setFilter({key: "color", value: /(\w)*/});
	}

	return (
		<form>
			<Button variant="info" onClick={setEntryListHandler} >Add Unit</Button>
			<Button variant="dark" onClick={sortEntryList}>Sort</Button>
			{/*<Button variant="success" onClick={showAvailable}>Show Available</Button>*/}
			{/*<Button variant="dark" onClick={showAllEntries}>Show All</Button>*/}
		</form>
	);
}

export default Form;