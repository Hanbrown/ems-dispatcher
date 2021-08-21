import React from "react";

// Import Components
import Todo from "./Todo";

const TodoList = ( { todos, setTodos, status } ) => {
	return (
		<div className="todo-container">
			{/*This is simply a container where to-do Items will be stored*/}
			<ul className="todo-list">
				{
					// Add the To-do items procedurally
					todos.filter(todo => {
						// Filtering the todos by status. Return false if none of these are true
						if ( !todo.completed && status === "uncompleted" ) {
							return true;
						}
						else if ( todo.completed && status === "completed" ) {
							return true;
						}
						else return status === "all";

					}).map(todo => (
						<Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos}/>
					))
				}
			</ul>
		</div>
	);
}

export default TodoList;