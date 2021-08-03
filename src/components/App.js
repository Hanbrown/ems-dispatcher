import React, { useState } from "react";
import "./SCSS/App.scss";

import {
	Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Button
} from "reactstrap";
import Main from "./Main";

const App = () => (

	<Row>
		<Col lg={{ size: 10, offset: 1 }}>
			<h1>Hello World! it's me, Pranav</h1>
			<Button onClick={toggle}>Open</Button>
			<Main />
			<Modal toggle={}>
				Lorem ipsum
			</Modal>
		</Col>
	</Row>
);

export default App;