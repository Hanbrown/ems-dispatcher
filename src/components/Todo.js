import React from "react";

const Todo = ( { todo, todos, setTodos } ) => {

	// Delete element
	const deleteHandler = () => {
		// Set the array of todos to every to-do that isn't the current one.
		// This effectively deletes the current to-do
		setTodos(todos.filter(el => (
			el.id !== todo.id
		)));
	}

	// Complete element
	const completeHandler = () => {
		setTodos(todos.map(item => {
			if(item.id === todo.id) {
				return {
					...item, completed: !item.completed
				}
			}
			return item;
		}))
	}

	return (
		<div className={"todo"}>
			<li className={`todo-item ${todo.completed ? "completed" : ""}`}>{todo.text}</li>
			<button className={`complete-btn ${todo.completed ? "completed" : ""}`} onClick={completeHandler}><i className={`fas ${todo.completed ? "fa-square" : "fa-check"}`}></i></button>
			<button className={"trash-btn"} onClick={deleteHandler}><i className={"fas fa-trash"}></i></button>
		</div>
	)
}

export default Todo;