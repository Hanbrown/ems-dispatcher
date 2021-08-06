import React from "react";
import Container from "react-bootstrap/Container";

class Entry extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			"name": "Guillermo",
			"label": "Safety",
			"number": 11,
			"action": "10-49",
			"action_mod": "with patient",
			"place": "Whitewater Falls Queue",
			"call": "HI"
		};
	}

	render() {
		// If color is not set, don't add a classname to the row
		const prefix = "entry-";
		let rowColor;

		if(this.props.color !== "grey")
			rowColor = prefix +this.props.color;

		// Render the row
		return (

			<Container className={"d-flex entry-row "+ rowColor} fluid={true}>
				<h4 className={"name-title"}>{this.state.name}</h4>				{/* Pranav */}

				<h4 className={"label-title"}>{this.state.label}</h4>			{/* Med */}
				<h2 className={"number-title"}>{this.state.number}</h2>			{/* 1 */}

				<h4>is</h4>
				<h2 className={"action-title"}>{this.state.action}</h2>         {/* 49 */}
				<h2 className={"action_mod-title"}>{this.state.action_mod}</h2> {/* en route */}

				<h4>to</h4>
				<h2 className={"place-title"}>{this.state.place}</h2>           {/* Railblazer */}

				<h4>for</h4>
				<h2 className={"call-title"}>{this.state.call}</h2>             {/* Signal 9HI */}
			</Container>
		);
	}
}

export default Entry;