import React from "react";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <TodoList />
      <TodoList />
      <TodoList />
    </div>
  );
}

export default App;
