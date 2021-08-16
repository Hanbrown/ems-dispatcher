import React from "react";
import Container from "react-bootstrap/Container";

class Entry extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			"id": 0,
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
				{/*<h4 className={"name-title"}>{this.state.name}</h4>				*/}
				<input type={"text"} className={"name-title"} placeholder={this.state.name} />	{/* Pranav */}

				<input type={"text"} className={"label-title"} placeholder={this.state.label} />				{/* Med */}
				<input type={"text"} className={"number-title"} placeholder={this.state.number} />			{/* 1 */}

				<h4>is</h4>
				<input type={"text"} className={"action-title"} placeholder={this.state.action} />
				{/*<h2 className={"action-title"}>{this.state.action}</h2>         /!* 10-49 *!/*/}
				{/*<h2 className={"action_mod-title"}>{this.state.action_mod}</h2> /!* en route *!/*/}
				<textarea className={"action_mod-title"} placeholder={this.state.action_mod}/>

				<h4>to</h4>
				{/*<h2 className={"place-title"}>{this.state.place}</h2>           				/!* Railblazer *!/*/}
				<textarea className={"place-title"} placeholder={this.state.place}/>

				<h4>for</h4>
				{/*<h2 className={"call-title"}>{this.state.call}</h2>             /!* Signal 9HI *!/*/}
				<input type={"text"} className={"call-title"} placeholder={this.state.call} />
			</Container>
		);
	}
}

export default Entry;