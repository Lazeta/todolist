import { useState } from "react";
import { TaskType, TodoList } from "./components/TodoList";
import { v1 } from "uuid";

export type FilterValuesType = "all" | "active" | "complited";

function App() {
  let [tasks, setTasks] = useState([
      { id: v1(), title: "HTML", isDone: true},
      { id: v1(), title: "CSS", isDone: true},
      { id: v1(), title: "SASS", isDone: true},
      { id: v1(), title: "JS", isDone: true},
      { id: v1(), title: "React", isDone: false},
    ]
  )

  let [filter, setFilter] = useState<FilterValuesType>("all")

  function addTask(title: string) {
    let newTask = { id: v1(), title: title, isDone: false}
    let newTasks = [newTask, ...tasks]; // create new object
    setTasks(newTasks);
  }

  function removeTask(id: string) {
    let filteredTasks = tasks.filter( t => t.id !== id);
    setTasks(filteredTasks);
  }

  function changeFilter(value: FilterValuesType) {
    setFilter(value)
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
      <TodoList title={"What to learn"} 
      tasks={tasksForTodoList} 
      removeTask={removeTask}
      changeFilter={changeFilter}
      addTask={addTask}
      />
      {/* <TodoList title={"What we done!"} tasks={tasks2}/> */}
    </div>
  );
}

export default App;


// [
//   { id: 1, title: "Webpack", isDone: true },
//   { id: 2, title: "TS", isDone: true},
//   { id: 3, title: "React", isDone: false},
//   { id: 4, title: "Redax", isDone: false},
//   { id: 5, title: "SCSS", isDone: true},
// ];