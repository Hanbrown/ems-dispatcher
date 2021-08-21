import React from "react";
import Container from "react-bootstrap/Container";

const Entry = ( { entry, setEntryList } ) => {

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
			<textarea className={"action_mod-title"} placeholder={entry.action_mod}/>

			<h4>to</h4>
			{/*<h2 className={"place-title"}>{this.state.place}</h2>           				/!* Railblazer *!/*/}
			<textarea className={"place-title"} placeholder={entry.place}/>

			<h4>for</h4>
			{/*<h2 className={"call-title"}>{this.state.call}</h2>             /!* Signal 9HI *!/*/}
			<input type={"text"} className={"call-title"} placeholder={entry.call} />
		</Container>
	);
}

export default Entry;