import React from "react";
import { v4 as uuidv4 } from "uuid";

// Import BS Components
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {FloatingLabel, InputGroup} from "react-bootstrap";

// Stuff in the parentheses are the properties of this component
const Nav = ({ groups, setGroups, defaultGroupName, setFilter } ) => {

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

	const removeEmptyGroups = () => {
		// Don't remove the default group
		setGroups(groups.filter(group => group.id === defaultGroupName.id || group.members.length > 0));
	}

	const changeGroupHandler = (e) => {
		let re = new RegExp(e.target.value);
		setFilter({key: "group", value: re});
	}

	return (
		<Form>
			<Row>
				<Col xs={2}>
					<Button variant="info" onClick={setEntryListHandler} >Add Unit</Button>
					<Button variant="dark" onClick={sortEntryList}>Sort</Button>
				</Col>
				<Col xs={3}>
					<Button variant="success" onClick={showAvailable}>Show Available</Button>
					<Button variant="dark" onClick={showAllEntries}>Show All</Button>
				</Col>
				<Col xs={3}>
					{/*<FloatingLabel controlId="floatingSelect" label="Category Filter">*/}
					{/*	<Form.Select aria-label={"None"} defaultValue={"(\d)|(\w)|-"} onChange={changeGroupHandler}>*/}
					{/*		<option key={"aaab"} value={"(\d)|(\w)|-"}>All</option>*/}
					{/*		{*/}
					{/*			groups.map(group => {*/}
					{/*				return (<option key={group.id} value={group.id}>{group.name}</option>);*/}
					{/*			})*/}
					{/*		}*/}
					{/*	</Form.Select>*/}
					{/*</FloatingLabel>*/}
				</Col>
				<Col xs={{span: 3, offset: 1}}>
					<Button variant="dark" onClick={removeEmptyGroups}>Remove Empty Groups</Button>
				</Col>
			</Row>
		</Form>
	);
}

export default Nav;