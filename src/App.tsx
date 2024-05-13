import React from "react";
import TodoList, { TaskType } from "./components/TodoList";

function App() {
  let tasks1: Array<TaskType> = [
    { id: 1, title: "HTML", isDone: true},
    { id: 2, title: "CSS", isDone: true},
    { id: 3, title: "SASS", isDone: true},
    { id: 4, title: "JS", isDone: true},
    { id: 5, title: "", isDone: false},
  ];

  let tasks2: Array<TaskType> = [
    { id: 1, title: "Webpack", isDone: true },
    { id: 2, title: "TS", isDone: true},
    { id: 3, title: "React", isDone: false},
    { id: 4, title: "Redax", isDone: false},
    { id: 5, title: "SCSS", isDone: true},
  ];

  return (
    <div className="flex justify-center items-center h-screen">
      <TodoList title={"What to learn"} tasks={tasks1}/>
      <TodoList title={"What we done!"} tasks={tasks2}/>
    </div>
  );
}

export default App;
