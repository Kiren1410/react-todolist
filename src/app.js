import {useState} from "react";

import TodoList from "./components/todo_list";


export default function App() {
    const [todos, setTodos] = useState([]);
    return (
        <div className="container">
            <TodoList todos={todos} setTodos={setTodos}/>
        </div>
    );
}