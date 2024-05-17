import { useState } from "react"
import { v1 } from "uuid"
import { TaskType, TodoList } from "./components/TodoList"
import { AddItemForm } from "./components/AddItemForm"

export type FilterValuesType = "all" | "active" | "completed"
type TodolistType = {
  id: string
  title: string
  filter: FilterValuesType
}

type TaskStateType = {
  [key: string]: Array<TaskType>
}

function App() {

  function removeTask(id: string, todolistId: string) {
    let tasks = tasksObj[todolistId]
    let filteredTasks = tasks.filter(t => t.id !== id)
    tasksObj[todolistId] = filteredTasks
    setTasks({...tasksObj})
  }

  function addTask(title: string, todolistId: string) {
    let task = { id: v1(), title: title, isDone: false }
    let tasks = tasksObj[todolistId]
    let newTasks = [task, ...tasks] // create new object
    tasksObj[todolistId] = newTasks
    setTasks({...tasksObj})
  }

  function changeStatus(taskId: string, isDone: boolean, todolistId: string) {
    let tasks = tasksObj[todolistId]
    let task = tasks.find(t => t.id === taskId)
    if (task) {
      task.isDone = isDone
      setTasks({...tasksObj})
    }
  }

  function changeFilter(value: FilterValuesType, todolistId: string) {
    let todolist = todolists.find(tl => tl.id === todolistId)
    if (todolist)
      todolist.filter = value
      setTodolists([...todolists])
  }


  let todolistId1 = v1()
  let todolistId2 = v1()

  let [todolists, setTodolists] = useState<Array<TodolistType>>([
    { id: todolistId1, title: "What to learn", filter: "all" },
    { id: todolistId2, title: "What we know", filter: "all" },
  ])

  let removeTodolist = (todolistId: string) => {
    let filteredTodolist = todolists.filter(tl => tl.id !== todolistId)
    setTodolists(filteredTodolist)
    delete tasksObj[todolistId]
    setTasks({...tasksObj})
  }

  let [tasksObj, setTasks] = useState<TaskStateType>({
    [todolistId1]: [
      { id: v1(), title: "HTML", isDone: true },
      { id: v1(), title: "CSS", isDone: true },
      { id: v1(), title: "SASS", isDone: true },
      { id: v1(), title: "JS", isDone: true },
      { id: v1(), title: "React", isDone: false },
    ],
    [todolistId2]: [
      { id: v1(), title: "Redax", isDone: false },
      { id: v1(), title: "MobX", isDone: false },
      { id: v1(), title: "BEM", isDone: true },
      { id: v1(), title: "Vite", isDone: true },
      { id: v1(), title: "SSH", isDone: false },
      { id: v1(), title: "RMR", isDone: false },
      { id: v1(), title: "Pattern", isDone: false },
    ]
  })

  function addTodolist(title: string) {
    let todolist: TodolistType = {
      id: v1(),
      filter: 'all',
      title: title
    }
    setTodolists([todolist, ...todolists])
    setTasks({
      ...tasksObj, [todolist.id]: []
    })
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <AddItemForm addItem={addTodolist}/>

      {todolists.map((tl) => {
        let tasksForTodoList = tasksObj[tl.id]
        if (tl.filter === "completed") {
          tasksForTodoList = tasksForTodoList.filter((t: TaskType) => t.isDone === true)
        }
        if (tl.filter === "active") {
          tasksForTodoList = tasksForTodoList.filter((t: TaskType) => t.isDone === false)
        }

        return (
          <TodoList key={tl.id}
            id={tl.id}
            title={tl.title}
            filter={tl.filter}
            tasks={tasksForTodoList}
            addTask={addTask}
            removeTask={removeTask}
            changeFilter={changeFilter}
            removeTodolist={removeTodolist}
            changeTaskStatus={changeStatus}
          />
        )
      })}
    </div>
  )
}

export default App