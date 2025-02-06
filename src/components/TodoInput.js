import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const TodoInput = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (input.trim() === "") return;
        dispatch(addTodo(input));
        setInput("");
    };

    return (
        <div className="input-section">
            <input
                type="text"
                placeholder="Add a task..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleAdd}>Add Todo</button>
        </div>
    );
};

export default TodoInput;
