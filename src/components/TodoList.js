import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../features/todo/todoSlice";

const TodoList = () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <span
                        className={`task-text ${todo.completed ? "completed" : ""}`}
                    >
                        {todo.text}
                    </span>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => dispatch(toggleTodo(todo.id))}
                    />
                    <span className={`status-icon ${todo.completed ? "completed-icon" : ""}`}>
                        {todo.completed ? "✔️" : "❌"}
                    </span>
                    <button className="delete-btn" onClick={() => dispatch(deleteTodo(todo.id))}>
                        Delete Todo
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
