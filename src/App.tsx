import { useState } from "react";
import { TodoList } from "./components/TodoList";
import { v1 } from "uuid";

export type FilterValuesType = "all" | "active" | "completed";
type TodolistType = {
  id: string;
  title: string;
  filter: FilterValuesType;
};

function App() {
  let [tasks, setTasks] = useState([
    { id: v1(), title: "HTML", isDone: true },
    { id: v1(), title: "CSS", isDone: true },
    { id: v1(), title: "SASS", isDone: true },
    { id: v1(), title: "JS", isDone: true },
    { id: v1(), title: "React", isDone: false },
  ]);

  // let [filter, setFilter] = useState<FilterValuesType>("all");

  function addTask(title: string) {
    let newTask = { id: v1(), title: title, isDone: false };
    let newTasks = [newTask, ...tasks]; // create new object
    setTasks(newTasks);
  }

  function removeTask(id: string) {
    let filteredTasks = tasks.filter((t) => t.id !== id);
    setTasks(filteredTasks);
  }

  function changeFilter(value: FilterValuesType, todolistId: string) {
    let todolist = todolists.find(tl => tl.id === todolistId);
    if (todolist)
      todolist.filter = value;
      setTodolists([...todolists])
  }

  function changeStatus(taskId: string, isDone: boolean) {
    let task = tasks.find((t) => t.id === taskId);
    if (task) {
      task.isDone = isDone;
    }
    setTasks([...tasks]);
  }

  let [todolists, setTodolists] = useState<Array<TodolistType>>([
    { id: v1(), title: "What to learn", filter: "active" },
    { id: v1(), title: "What we know", filter: "completed" },
  ]);

  return (
    <div className="flex justify-center items-center h-screen">
      {todolists.map((tl) => {
        let tasksForTodoList = tasks;
        if (tl.filter === "completed") {
          tasksForTodoList = tasks.filter((t) => t.isDone === true);
        }
        if (tl.filter === "active") {
          tasksForTodoList = tasks.filter((t) => t.isDone === false);
        }

        return (
          <TodoList key={tl.id}
            id={tl.id}
            title={tl.title}
            tasks={tasksForTodoList}
            removeTask={removeTask}
            changeFilter={changeFilter}
            addTask={addTask}
            changeTaskStatus={changeStatus}
            filter={tl.filter}
          />
        );
      })}
    </div>
  );
}

export default App;
