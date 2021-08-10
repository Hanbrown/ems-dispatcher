import React from "react";
import "./SCSS/App.scss";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";

import Main from "./Main";

const App = () => (
	<Container fluid={"md"}>
		<Row>
			<Col lg={{ span: 10, offset: 1 }}>
				<Main />
			</Col>
		</Row>
	</Container>
);

export default App;