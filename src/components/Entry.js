import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Menu from "./Menu";

/** An individual entry **/
const Entry = ( { entry, entries, setEntryList, groups, setGroups } ) => {

	const [preposition, setPreposition] = useState("to");

	let codes = {
		// 10 codes
		"6":	{label: "Busy",				color: "red", 	prep: "at"},
		"7": 	{label: "off duty",			color: "grey", 	prep: "in"},
		"7OD": 	{label: "off duty",			color: "grey", 	prep: "in"},
		"8": 	{label: "on duty",			color: "green",	prep: "at"},
		"18": 	{label: "on break",			color: "grey", 	prep: "in"},
		"19": 	{label: "returning", 		color: "blue", 	prep: "to"},
		"49": 	{label: "en route", 		color: "yellow", prep: "to"},
		"87":	{label: "at meeting",		color: "blue",	prep: "at"},
		"97":	{label: "on scene", 		color: "red",	prep: "at"},
		"98":	{label: "finished",			color: "green",	prep: "at"},
		"9": 	{label: "Repeat"},
		// Signals
		"S9HI": {label: "Heat Illness"},
		"S9": 	{label: "9"},
		"S9M": 	{label: "9M"},
		"904": 	{label: "Fire"},
		// Codes
		"C1":	{label: "when able",		color: "blue", prep: "at"},
		"C2":	{label: "urgent",			color: "red", prep: "at"},
		"C3":	{label: "emergency",		color: "red", prep: "at"},
		"C4":	{label: "no further assistance",	color: "red", prep: "at"},
		"C7":	{label: "on lunch",			color: "grey", prep: "in"},
	};

	const getRadioCode = (code) => {

		code = code.replace(/\s/g, ""); // Remove whitespace
		let re_dash = /10-?/; 			// 10-7, 107, 10-7 are accepted
		let re_sig = /sig-?(nal-?)?/i; 	// Sig 9M, Signal 9, sig-9 are accepted
		let re_code = /c(ode)?/i;		// C7, code 4, and Code 1 are accepted

		code = code.toUpperCase();
		code = code.replace(re_dash, ""); // Default prefix is 10-*
		code = code.replace(re_sig, "S");
		code = code.replace(re_code, "C");

		return codes[code] ? codes[code] : "";
	}

	const inputChangeHandler = (e) => {
		let label = e.target.dataset.field;
		let value;

		if(e.target.value)
			value = e.target.value;
		else
			value = e.target.textContent;

		entry[label] = value;
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
		//inputChangeHandler(e);
		let code = getRadioCode(e.target.value);
		setPreposition(code ? code.prep : "to");

		setEntryList(entries.map(item => {
			if (item.id === entry.id) {
				return {
					...item,
					action_mod: code.label, // Changes the action modifier
					color: code.color,		// Changes the color
					updated: new Date(),	// Change time last updated
				}
			}
			// Don't change any other entries. Just the one we are currently editing.
			else
				return item;
		}));

	}

	// const actionBlurHandler = (e) => {
	// 	let code = getRadioCode(e.target.value);
	//
	// 	// Update action modifier of this entry
	// 	setEntryList(entries.map(item => {
	// 		if (item.id === entry.id) {
	// 			return {
	// 				...item,
	// 				action_mod: code.label, // Changes the action modifier
	// 				color: code.color,		// Changes the color
	// 			}
	// 		}
	// 		// Don't change any other entries. Just the one we are currently editing.
	// 		else
	// 			return item;
	// 	}));
	// }

	return (
		// Default color is grey
		<Container className={`d-flex entry-row ecl-${entry.color ? entry.color : "grey"}`} fluid={true}>

			{/* Pranav */}
			<input type={"text"} className={"name-title"}
				   placeholder={"Name"} spellCheck={false}
				   data-field={"name"}
				   onBlur={inputChangeHandler}
			/>

			{/* Med */}
			<input type={"text"} className={"rank-title"}
				   placeholder={"Safety"} spellCheck={false}
				   data-field={"rank"}
				   onBlur={inputChangeHandler}
			/>

			{/* 1 */}
			<input type={"text"} className={"number-title"}
				   placeholder={"#"} spellCheck={false}
				   data-field={"number"}
				   onBlur={inputChangeHandler}
			/>

			<h4>is</h4>

			{/* 10-49 */}
			<input type={"text"} className={"action-title"}
				   placeholder={"Action"} spellCheck={false}
				   data-field={"action"}
				   onInput={actionChangeHandler}
			/>
			{/* en route */}
			<div className={"textarea-container am-container"}>
				<p className={"textarea am-title"}
				   contentEditable={true} spellCheck={false}
				   data-field={"action_mod"} data-placeholder={"modifier"}
				   onBlur={areaBlurHandler} onFocus={areaFocusHandler}
				>{ entry.action_mod ? entry.action_mod : "" }</p>
			</div>

			<h4>{preposition}</h4>

			{/* Railblazer */}
			<div className={"textarea-container place-container"}>
				<p className={"textarea place-title"}
				   contentEditable={true} spellCheck={false}
				   data-field={"place"} data-placeholder={"Location"}
				   onBlur={areaBlurHandler} onFocus={areaFocusHandler} onInput={inputChangeHandler}
				>{ entry.place ? entry.place : "" }</p>
			</div>

			<h4>for</h4>

			{/* HI */}
			<input type={"text"} className={"call-title"}
				   placeholder={"Call"}
				   data-field={"call"}
				   onInput={inputChangeHandler}
			/>

			{/* Menu for deleting/breaking units */}
			{/*<Button variant={"danger"} onClick={deleteHandler} >Delete</Button>*/}
			<Menu
				entry={entry}
				entries={entries} setEntryList={setEntryList}
				groups={groups} setGroups={setGroups}
			/>
		</Container>
	);
}

export default Entry;