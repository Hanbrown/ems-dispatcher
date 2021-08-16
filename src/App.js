import React from "react";
import "./components/SCSS/App.scss";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";

import Main from "./components/Main";

const App = () => (
	<>
		<Row>
			<Col lg={{ span: 10, offset: 1 }}>
				<Main />
			</Col>
		</Row>
	</>
);

export default App;