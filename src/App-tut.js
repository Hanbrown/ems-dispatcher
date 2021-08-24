import React, {useState} from "react";
import "./components/SCSS/tut.scss";

// Import Components
import FormTut from "./components/Form-tut";
import TodoList from "./components/TodoList";

function App() {

	// States. [ textValue, setValueFunction ]
	const [inputText, setInputText] = useState(""); // Just text, so we use a string
	const [todos, setTodos] = useState([]); // Since we have many todos, we use an array
	const [status, setStatus] = useState("all"); // Default value is "all"
	const [filteredTodos, setFilteredTodos] = useState([]); // For filtering the list -- we don't want to immediately remove entries from view on edit.

	// // Use effect
	// useEffect(() => {
	// 	filterHandler();
	// }, [todos.length, status])

	return (
		<div className={"App"}>
			<header>
				<h1>Ed's Todo List</h1>
			</header>
			<FormTut inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} setStatus={setStatus} setFilteredTodos={setFilteredTodos} /> {/* Now, Form-tut.js can access other functions */}
			<TodoList todos={todos} setTodos={setTodos} status={status} />
		</div>
	);
}

export default App;