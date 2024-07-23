import { useState } from 'react';
import './ToDo.css'; // Import the CSS file
import { v4 as uuidv4 } from 'uuid';

export default function ToDo(){
    let [todos, setTodos] = useState([{ task: "sample", id: uuidv4() }]); // All tasks
    let [todo, setTodo] = useState(""); // New task

    let addNewTask = () => {
        if (todo.trim() !== "") {
            setTodos([...todos, { task: todo, id: uuidv4() }]);
            setTodo("");
        }
    }

    let updateTodo = (event) => {
        setTodo(event.target.value);
    }

    let deleteTask = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    return (
        <div>
            <input placeholder="Enter a Task" value={todo} onChange={updateTodo}></input>
            <br></br>
            <button onClick={addNewTask}>Add Task</button>
            <br></br>
            <br></br>
            <br></br>

            <hr></hr>
            <h4>Tasks To Do</h4>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                       <span>{todo.task}</span> 
                       &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;
                        <button onClick={() => deleteTask(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
