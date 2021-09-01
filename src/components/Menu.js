/*
 * Pranav Rao
 * 8/29/2021
 * EMS Dispatcher
 * This component contains stuff for the options menu, displayed for each entry
 */

// NPM Imports
import React, {useState} from "react";
import {v4 as uuidv4} from "uuid";

// Bootstrap Imports (technically also NPM)
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {InputGroup} from "react-bootstrap";

const Menu = ( { entry, entries, setEntryList, groups, setGroups } ) => {
	const [show, setShow] = useState(false); // Whether the modal is showing or not
	const [name, setName] = useState("");

	// Get the amount of time elapsed since update
	const getDifference = () => {
		let currentTime = new Date();
		let diff = currentTime.getTime() - entry.updated.getTime();

		let hh = Math.floor(diff / 1000 / 3600);
		diff -= hh * 1000 * 3600;
		let mm = Math.floor(diff / 1000 / 60);
		diff -= mm * 1000 * 60;
		let ss = Math.floor(diff / 1000);

		hh = hh.toString().padStart(2, "0");
		mm = mm.toString().padStart(2, "0");
		ss = ss.toString().padStart(2, "0");

		return `${hh}:${mm}`;
	}

	const handleClose = () => setShow(false);
	const handleShow = () => {
		setShow(true);
	}

	// When user changes what group the entry is in
	function changeGroupHandler(e) {
		//alert(e.target.value);

		setGroups(groups.map(group => {
			// Remove entry from the old group
			if( entry.group === group.id ) {
				group.members = group.members.filter(mem => {
					if(mem.id !== entry.id)
						return mem;
				});
			}
			// Add entry to new group
			else if( e.target.value === group.id ) {
				group.members.push(entry);
			}
		}));
		console.log(groups);
		// Change entry's group name to the new group
		entry.group = e.target.value;
	}

	// When user edits the name of the to-be-added new group. Remember that setName describes a state only in Menu.js
	const changeNewGroupHandler = (e) => {
		setName(e.target.value);
	}

	// When user hits the "add" button to add a new group
	const addGroupHandler = () => {
		let newGroupId =  uuidv4();

		setGroups(groups.map(group => {
			// Remove entry from the old group
			if( entry.group === group.id ) {
				group.members = group.members.filter(mem => {
					if(mem.id !== entry.id)
						return mem;
				});
			}
			// Add entry to new group

		}));
		console.log(groups);
		// Change entry's group name to the new group
		entry.group = newGroupId;

		// Add new group, but don't add current member to it
		setGroups([
			...groups,
			{
				id: newGroupId,
				name: name,
				members: [entry],
			}
		]);

		// Clear the value of the name field
		setName("");
	}

	// Delete an entry on click
	const deleteHandler = () => {
		if( confirm("Are you sure you want to delete this unit?") ) {
			handleClose(); // Finally, close the modal box
			setEntryList(
				entries.filter(el => (
					el.id !== entry.id
				))
			);
			groups.map(group => {
				group.members = group.members.filter(mem => {
					if( mem.id !== entry.id )
						return mem;
				})
			})
		}
	}

	return (
		<>
			<Button variant={"outline-light"} onClick={handleShow}>
				<i className="fas fa-bars"></i>
			</Button>

			{/* The modal */}
			<Modal show={show} onHide={handleClose} >
				<Modal.Header closeButton>
					<Modal.Title>Options for {entry.rank} {entry.number}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<label>Add to Group</label>
					<Form.Select aria-label={"None"} defaultValue={groups.filter(group => (group.id === entry.group))[0].name} onChange={changeGroupHandler}>
						{
							groups.map(group => {
								if( group.id === entry.group )
									return(<option key={group.id} value={group.id}>{group.name}</option>);

								return(<option key={group.id} value={group.id}>{group.name}</option>);
							})
						}
					</Form.Select>
					<InputGroup>
						<Form.Control type={"text"} placeholder={"Create New Group"} value={name} onChange={changeNewGroupHandler} />
						<Button type={"submit"} variant={"outline-success"} onClick={addGroupHandler}>Add</Button>
					</InputGroup>

					<br />
					<label className={"small"}>
						Last updated at {entry.updated.getHours()}:
						{entry.updated.getMinutes().toString().padStart(2, "0")}
						{/*entry.updated.getSeconds().toString().padStart(2, "0")*/} ({getDifference()} ago)
					</label>
				</Modal.Body>
				<Modal.Footer>
					<Button variant={"danger"} onClick={deleteHandler}>Delete Unit</Button>
					<Button variant={"outline-dark"} onClick={handleClose}>Close</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default Menu;