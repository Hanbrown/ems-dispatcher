import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

/** An individual entry **/
const Entry = ( { entry, entries, setEntryList } ) => {

	// Delete an entry on click
	const deleteHandler = () => {
		setEntryList(
			entries.filter(el => (
				el.id !== entry.id
			))
		);
	}

	return (

		<Container className={"d-flex entry-row "} fluid={true}>
			{/*<h4 className={"name-title"}>{this.state.name}</h4>				*/}
			<input type={"text"} className={"name-title"} placeholder={entry.name} />	{/* Pranav */}

			<input type={"text"} className={"label-title"} placeholder={entry.label} />				{/* Med */}
			<input type={"text"} className={"number-title"} placeholder={entry.number} />			{/* 1 */}

			<h4>is</h4>
			<input type={"text"} className={"action-title"} placeholder={entry.action} />
			{/*<h2 className={"action-title"}>{this.state.action}</h2>         /!* 10-49 *!/*/}
			{/*<h2 className={"action_mod-title"}>{this.state.action_mod}</h2> /!* en route *!/*/}
			<div className={"am-container"}>
				<p className={"am-title"} contentEditable={true} >{entry.action_mod}</p>           				{/* Railblazer */}
			</div>

			<h4>to</h4>
			<div className={"place-container"}>
				<p id={"place-title"} className={"place-title"} contentEditable={true} >{entry.place}</p>           				{/* Railblazer */}
			</div>

			<h4>for</h4>
			{/*<h2 className={"call-title"}>{this.state.call}</h2>             /!* Signal 9HI *!/*/}
			<input type={"text"} className={"call-title"} placeholder={entry.call} />
			<Button variant={"danger"} onClick={deleteHandler} >Delete</Button>
		</Container>
	);
}

export default Entry;