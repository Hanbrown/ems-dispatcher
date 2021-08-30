/*
 * Pranav Rao
 * 8/29/2021
 * EMS Dispatcher
 * This component contains stuff for the options menu, displayed for each entry
 */

import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Menu = ( { entry, entries, setEntryList } ) => {
	const [show, setShow] = useState(false); // Whether the modal is showing or not

	//let timeDifference = ""; // Will be calculated on opening

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

		//return `${hh}:${mm}:${ss}`;
		return `${hh}:${mm}`;
	}

	const handleClose = () => setShow(false);
	const handleShow = () => {
		setShow(true);
		//timeDifference = getDifference();
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
					<select className={"form-select"}>
						<option defaultValue={true} value={"none"}>--None--</option>
						<option value={"non"}>--Non--</option>
					</select>

					<br />
					<label className={"small"}>
						Last updated at {entry.updated.getHours()}:
						{entry.updated.getMinutes().toString().padStart(2, "0")}
						{/*entry.updated.getSeconds().toString().padStart(2, "0")*/} ({getDifference()} ago)
					</label>
					<br />
					<Button variant={"danger"} onClick={deleteHandler}>Delete Unit</Button>
				</Modal.Body>
				<Modal.Footer>
					<Button variant={"outline-dark"} onClick={handleClose}>Close</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default Menu;