/*
 * Pranav Rao
 * 8/29/2021
 * EMS Dispatcher
 * This component contains stuff for the options menu, displayed for each entry
 */

import React, {useEffect, useState} from "react";
import { v4 as uuidv4 } from "uuid";

import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {InputGroup} from "react-bootstrap";

const Menu = ( { entry, groups, setGroups, defaultGroupName, setDefaultGroupName } ) => {
	const [show, setShow] = useState(false); // Whether the modal is showing or not
	const [newName, setNewName] = useState("");
	const [curName, setCurName] = useState(groups.filter(group => (group.id === entry.group))[0].name);
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const time = () => {
			const ev = new Date();
			setTime(ev);
		}
		const intervalId = setInterval(time, 1000);

		return () => {
			clearInterval(intervalId);
		}
	}, []);

	const getDifference = () => {
		//let currentTime = new Date();
		let diff = time.getTime() - entry.updated.getTime();

		let hh = Math.floor(diff / 1000 / 3600);
		diff -= hh * 1000 * 3600;
		let mm = Math.floor(diff / 1000 / 60);
		diff -= mm * 1000 * 60;
		let ss = Math.floor(diff / 1000);

		hh = hh.toString().padStart(2, "0");
		mm = mm.toString().padStart(2, "0");
		ss = ss.toString().padStart(2, "0");

		//return `${hh}:${mm}:${ss}`;
		return `${hh}:${mm}`;
	}

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	// When user changes the entry's group
	const changeGroupHandler = (e) => {
		// Old group
		let oldGroup = entry.group;

		// Set entry's "group" property to the new group
		entry.group = e.target.value;

		// Add entry to the other group
		setGroups(groups.map(group => {
			if( group.id === e.target.value ) {
				return {
					...group,
					members: group.members.push(entry),
				}
			}
			return group;
		}));

		// Remove entry from the old group
		setGroups(groups.map(group => {
			if( group.id === oldGroup ) {
				return {
					...group,
					members: group.members = group.members.filter(mem => mem.id !== entry.id),
				}
			}
			return group;
		}));

	}

	// When user edits the name of the group they will soon add
	const changeNewGroupHandler = (e) => {
		setNewName(e.target.value);
	}

	// Add a new group button
	const addGroupHandler = () => {
		// Don't make a category with a blank name
		if( newName ) {
			setGroups([
				...groups,
				{
					id: uuidv4(),
					name: newName,
					members: [],
				}
			])

			// Clear the new name category
			setNewName("");
		}
	}

	// When user changes the name of the current group
	const changeCurGroupHandler = (e) => {
		setCurName(e.target.value);
	}

	// When user hits the change name button
	const editGroupHandler = () => {
		// Don't make a category with a blank name
		if( curName ) {
			setGroups(groups.map(group => {
				if( group.id === entry.group ) {
					return {
						...group,
						name: curName,
					}
				}
				return group;
			}));

			// If user edits the default category, change the default category name
			if( entry.group === defaultGroupName.id) {
				setDefaultGroupName({...defaultGroupName, name: curName});
			}
		}
	}

	// Change color of entry, if user desires
	const changeColorHandler = (e) => {
		// We have to do all this because we need to update the master group list
		setGroups(groups.map(group => {
			if( group.id === entry.group ) {
				group.members.map(mem => {
					if ( mem.id === entry.id )
						mem.color = e.target.value;
					return mem;
				})
			}
			return group;
		}))
	}

	// Delete an entry on click
	const deleteHandler = () => {
		if( confirm("Are you sure you want to delete this unit?") ) {
			// Remove entry from corresponding group list
			setGroups( groups.map(group => {
				if (group.id === entry.group) {
					return {
						...group,
						members: group.members.filter(mem => mem.id !== entry.id),
					}
				}
				else
					return group;
			}));
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
					<Modal.Title>Options for <span className={"text-info"}>{entry.rank} {entry.number}</span></Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<label>Change Group</label>
					<Form.Select aria-label={"None"} defaultValue={groups.filter(group => (group.id === entry.group))[0].id} onChange={changeGroupHandler}>
						{
							groups.map(group => {
								return (<option key={group.id} value={group.id}>{group.name}</option>);
							})
						}
					</Form.Select>
					<br />

					<label>Create New Group</label>
					<InputGroup>
						<Form.Control type={"text"} placeholder={"Create New Group"} value={newName} onChange={changeNewGroupHandler} />
						<Button type={"submit"} variant={"outline-success"} onClick={addGroupHandler}>Add</Button>
					</InputGroup>
					<br />

					<label>Edit Group Name</label>
					<InputGroup>
						<Form.Control type={"text"} placeholder={"Edit Group Name"} value={curName} onChange={changeCurGroupHandler} />
						<Button type={"submit"} variant={"outline-success"} onClick={editGroupHandler}>Edit</Button>
					</InputGroup>
					<br />

					<label>Edit Color</label>
					<Form.Select aria-label={"None"} defaultValue={entry.color ? entry.color : "grey"} onChange={changeColorHandler}>
						<option value={"green"}>Green</option>
						<option value={"red"}>Red</option>
						<option value={"blue"}>Blue</option>
						<option value={"yellow"}>yellow</option>
						<option value={"grey"}>Grey</option>
					</Form.Select>
					<br />

					<label className={"small"}>
						Last updated at {entry.updated.getHours()}:{entry.updated.getMinutes().toString().padStart(2, "0")} ({getDifference()} ago)
					</label>
					<br />
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