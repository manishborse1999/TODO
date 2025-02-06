import React from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <h1>Todos</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default App;
