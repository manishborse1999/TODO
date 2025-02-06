import { createSlice } from "@reduxjs/toolkit";

// Load tasks from localStorage
const loadTodos = () => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
};

const todoSlice = createSlice({
    name: "todos",
    initialState: loadTodos(),
    reducers: {
        addTodo: (state, action) => {
            state.push({ id: Date.now(), text: action.payload, completed: false });
            localStorage.setItem("todos", JSON.stringify(state));
        },
        toggleTodo: (state, action) => {
            const todo = state.find((t) => t.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
            localStorage.setItem("todos", JSON.stringify(state));
        },
        deleteTodo: (state, action) => {
            const updatedTodos = state.filter((t) => t.id !== action.payload);
            localStorage.setItem("todos", JSON.stringify(updatedTodos));
            return updatedTodos;
        },
    },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;