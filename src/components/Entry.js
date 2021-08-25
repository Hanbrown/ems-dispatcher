import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

/** An individual entry **/
const Entry = ( { entry, entries, setEntryList } ) => {

	let codes = {
		"7": 	{label: "off duty",		color: "grey"},
		"7OD": 	{label: "off duty",		color: "grey"},
		"8": 	{label: "on duty",		color: "green"},
		"97":	{label: "on scene", 	color: "red"},
		"S9HI": {label: "Heat Illness"},
		"S9": 	{label: "9"},
		"S9M": 	{label: "9M"},
		"9": 	{label: "Repeat"},
		"904": 	{label: "Fire"},
	};

	const getRadioCode = (code, prop) => {

		code = code.replace(/\s/g, "");
		let re_dash = /10-?/; 			// 10-7, 107, 10-7 are accepted
		let re_sig = /sig-?(nal-?)?/i; 	// Sig 9M, Signal 9, sig-9 are accepted

		code = code.replace(re_dash, "");
		code = code.replace(re_sig, "S");

		return codes[code][prop];
	}

	// When a user clicks EXITS the field
	const areaBlurHandler = (e) => {
		// If the field is empty, show the placeholder instead
		if( e.target.innerHTML === "<br>" || e.target.innerHTML === "" ) {
			e.target.innerHTML = e.target.dataset.placeholder;
			e.target.style.color = "rgba(0, 0, 0, 0.6)";
		}
		// If the field is not empty, make the color opaque
		else {
			e.target.style.color = "rgba(0, 0, 0, 1.0)";
		}
	}

	// When a user EDITS the field
	const areaFocusHandler = (e) => {
		// We assume the user wants to change the default value, so set the color to opaque.
		e.target.style.color = "rgba(0, 0, 0, 1.0)";

		// If the field is empty (i.e. it is showing the placeholder), set the field to blank
		if( e.target.innerHTML === e.target.dataset.placeholder ) {
			e.target.innerHTML = "";
		}
	}

	// When a user sets the "action" of a unit.
	const actionChangeHandler = (e) => {
		// Update color and action modifier of this entry
		setEntryList(entries.map(item => {
			// Update Current Entry
			if (item.id === entry.id) {
				return {
					...item,
					action_mod: getRadioCode(e.target.value, "label"), // Changes the action modifier
					color: getRadioCode(e.target.value, "color"),		// Changes the color
				}
			}
			// Don't change any other entries. Just the one we are currently editing.
			else
				return item;
		}));
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
		// Default color is grey
		<Container className={`d-flex entry-row ecl-${entry.color ? entry.color : "grey"}`} fluid={true}>
			<input type={"text"} className={"name-title"} placeholder={entry.name} spellCheck={false} />				{/* Pranav */}

			<input type={"text"} className={"label-title"} placeholder={entry.label} spellCheck={false} />				{/* Med */}
			<input type={"text"} className={"number-title"} placeholder={entry.number} spellCheck={false} />			{/* 1 */}

			<h4>is</h4>																									{/* is */}
			<input type={"text"} className={"action-title"}
				   placeholder={entry.action} spellCheck={false}
				   onChange={actionChangeHandler}
			/>																											{/* 10-49 */}
			<div className={"textarea-container am-container"}>
				<p id={"am-title"} className={"textarea am-title"}
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