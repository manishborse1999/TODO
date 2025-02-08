import React from "react";
import Todo from "./Todo";
import Todos from "./Todos";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <h1>Todos</h1>
      <Todo />
      <Todos />
    </div>
  );
};

export default App;
