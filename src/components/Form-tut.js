import React from "react";
import { v4 as uuidv4 } from "uuid";

// Stuff in the parentheses are the properties of this component
const FormTut = ({ inputText, setInputText, todos, setTodos, setStatus, setFilteredTodos } ) => {

	// All code is executed sequentially from here.

	// Change the state of the form (see App-tut.js)
	const inputTextHandler = (e) => {
		setInputText(e.target.value);
	}

	const filterHandler = () => {
		switch(status) {
			case "completed":
				setFilteredTodos(todos.filter(todo => todo.completed === true));
				break;
			case "uncompleted":
				setFilteredTodos(todos.filter(todo => todo.completed === false));
				break;
			default:
				setFilteredTodos(todos);
				break;
		}
	}

	// Add a new task when user hits the "plus" icon
	const submitTodoHandler = (e) => {
		e.preventDefault();
		// New JS syntax. ...todos means keep all other properties, and curly brace stuff is all that is modified
		setTodos([
			{ text: inputText, completed: false, id: uuidv4() }, ...todos
		]);

		// Reset value in form
		setInputText("");

		filterHandler();
	}

	// Filter results
	const setStatusHandler = (e) => {
		setStatus(e.target.value);
		filterHandler();
	}

	return (
		<form>
			<input
				value={inputText}
				onChange={inputTextHandler}
				type="text"
				className="todo-input"
			/>
			<button className="todo-button" onClick={submitTodoHandler} type="submit">
				<i className="fas fa-plus-square"></i>
			</button>
			<div className="select">
				<select name="todos" className="filter-todo" onChange={setStatusHandler}>
					<option value="all">All</option>
					<option value="completed">Completed</option>
					<option value="uncompleted">Uncompleted</option>
				</select>
			</div>
		</form>
	);
}

export default FormTut;