import React, { useState } from "react";
import TodoList, { TaskType } from "./components/TodoList";

function App() {
  // let tasks2: Array<TaskType> = [
  //   { id: 1, title: "Webpack", isDone: true },
  //   { id: 2, title: "TS", isDone: true},
  //   { id: 3, title: "React", isDone: false},
  //   { id: 4, title: "Redax", isDone: false},
  //   { id: 5, title: "SCSS", isDone: true},
  // ];
  let [tasks, setTasks] = useState(
    [
      { id: 1, title: "HTML", isDone: true},
      { id: 2, title: "CSS", isDone: true},
      { id: 3, title: "SASS", isDone: true},
      { id: 4, title: "JS", isDone: true},
    ]
  )
  let [filter, setFilter] = useState("all")

  function removeTask(id: number) {
    let filteredTasks = tasks.filter( t => t.id !== id);
    setTasks(filteredTasks);
  }

  let tasksForTodoList = tasks;
  if (filter === "complited"){
    tasksForTodoList = tasks.filter(t => t.isDone === true);
  }
  if (filter === "active"){
    tasksForTodoList = tasks.filter(t => t.isDone === false)
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <TodoList title={"What to learn"} tasks={tasksForTodoList} removeTask={removeTask}/>
      {/* <TodoList title={"What we done!"} tasks={tasks2}/> */}
    </div>
  );
}

export default App;
