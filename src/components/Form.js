import React from "react";
import { v4 as uuidv4 } from "uuid";

// Import BS Components
import Button from "react-bootstrap/Button";

// Stuff in the parentheses are the properties of this component
const Form = ({ groups, setGroups, defaultGroupName, setFilter } ) => {

	// All code is executed sequentially from here.

	// Add a new entry
	const setEntryListHandler = (e) => {
		e.preventDefault();

		let newEntry = {
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
		};

		// If this is the first entry, create a default category
		if( groups.length === 0 ) {
			defaultGroupName.id = uuidv4();
			newEntry.group = defaultGroupName.id;

			setGroups([
				...groups,
				{
					id: defaultGroupName.id,
					name: defaultGroupName.name,
					members: [newEntry],
				}
			]);
		}
		// If default category already exists, just add new entry to it.
		else {
			newEntry.group = defaultGroupName.id;
			setGroups(
				groups.map(group => {
					if( group.name === defaultGroupName.name ) {
						group.members.push(newEntry);
						return group;
					}
					else
						return group;
				})
			);
		}

	}

	// Sort by Med/Safety number
	const sortEntryList = () => {
		// First, in each group, sort the members by med number
		groups.map(group => {
			let members = group.members;
			// Sort all the members
			members.sort( (a, b) => (parseInt(a.number) - parseInt(b.number)) );
		});

		// Next, sort groups by name (alphabetical)
		groups.sort( (a, b) => {
			let nameA = a.name.toUpperCase(); // ignore upper and lowercase
			let nameB = b.name.toUpperCase(); // ignore upper and lowercase
			if (nameA < nameB) {
				return -1;
			}
			if (nameA > nameB) {
				return 1;
			}

			// names must be equal
			return 0;
		});
		setGroups(groups.map(group => {
			return group;
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