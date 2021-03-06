import React, {useState} from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Prompt() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			{/** This part will show up on a webpage **/}
			<Button variant="info" onClick={handleShow}>
				Launch demo modal
			</Button>
			{/** *********************************** **/}

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default Prompt;
