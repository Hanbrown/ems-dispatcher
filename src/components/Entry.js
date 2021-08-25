import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

/** An individual entry **/
const Entry = ( { entry, entries, setEntryList } ) => {

	// When a user clicks EXITS the field
	const areaBlurHandler = (e) => {
		// If the field is empty, show the placeholder instead
		if( e.target.innerHTML === "<br>" || e.target.innerHTML === "" ) {
			e.target.innerHTML = e.target.dataset.placeholder;
			e.target.style.color = "rgba(0, 0, 0, 0.6)";
		}
		else {
			e.target.style.color = "rgba(0, 0, 0, 1.0)";
		}
	}

	// When a user EDITS the field
	const areaFocusHandler = (e) => {
		// If the field is empty (i.e. it is showing the placeholder), set the field to blank
		if( e.target.innerHTML === e.target.dataset.placeholder ) {
			e.target.innerHTML = "";

		}
		e.target.style.color = "rgba(0, 0, 0, 1.0)";
	}

	// Delete an entry on click
	const deleteHandler = () => {
		setEntryList(
			entries.filter(el => (
				el.id !== entry.id
			))
		);
	}

	return (

		<Container className={"d-flex entry-row entry-blue"} fluid={true}>
			<input type={"text"} className={"name-title"} placeholder={entry.name} spellCheck={false} />				{/* Pranav */}

			<input type={"text"} className={"label-title"} placeholder={entry.label} spellCheck={false} />				{/* Med */}
			<input type={"text"} className={"number-title"} placeholder={entry.number} spellCheck={false} />			{/* 1 */}

			<h4>is</h4>																									{/* is */}
			<input type={"text"} className={"action-title"} placeholder={entry.action} spellCheck={false} />			{/* 10-49 */}
			<div className={"textarea-container am-container"}>
				<p className={"textarea am-title"}
				   contentEditable={true} spellCheck={false}
				   data-placeholder={entry.action_mod} onBlur={areaBlurHandler} onFocus={areaFocusHandler}
				/>																										{/* en route */}
			</div>

			<h4>to</h4>																									{/* to */}
			<div className={"textarea-container place-container"}>
				<p className={"textarea place-title"}
				   contentEditable={true} spellCheck={false}
				   data-placeholder={entry.place} onBlur={areaBlurHandler} onFocus={areaFocusHandler}
				/>																										{/* Railblazer */}
			</div>

			<h4>for</h4>																								{/* for */}
			<input type={"text"} className={"call-title"} placeholder={entry.call} />									{/* HI */}
			<Button variant={"danger"} onClick={deleteHandler} >Delete</Button>
		</Container>
	);
}

export default Entry;