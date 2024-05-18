import { ChangeEvent } from "react"
import { FilterValuesType } from "../App"
import { AddItemForm } from "./AddItemForm"
import { EditableSpan } from "./EditableSpan"
import { Button, Checkbox, IconButton } from "@mui/material"
import { Delete } from "@mui/icons-material"

export type TaskType = {
  id: string
  title: string
  isDone: boolean
}

type PropsType = {
  id: string
  title: string
  tasks: Array<TaskType>
  filter: FilterValuesType
  removeTodolist: (todolistId: string) => void
  addTask: (title: string, todolistId: string) => void
  removeTask: (taskId: string, todolistId: string) => void
  changeFilter: (value: FilterValuesType, todolistId: string) => void
  changeTaskTitle: (id: string, newTitle: string, todolistId: string) => void
  changeTaskStatus: (taskId: string, isDone: boolean,todolistId: string) => void
  changeTodolistTitle: (id: string, newTitle: string) => void
}

export function TodoList(props: PropsType) {
  const onAllClickHandler = () => props.changeFilter("all", props.id)
  const onActiveClickHandler = () => props.changeFilter("active", props.id)
  const onCompletedClickHandler = () => props.changeFilter("completed", props.id)
  const removeTodolist = () => props.removeTodolist(props.id)
  const addTask = (title: string) => props.addTask(title, props.id)
  const changeTodolistTitle = (newTitle: string) => props.changeTodolistTitle(props.id, newTitle)

  return (
    <div className="font-sans px-5">
      <div className="flex items-baseline">
        <h3 className="text-3xl m-3">
          <EditableSpan title={props.title} onChange={changeTodolistTitle}/>
        </h3>
        <IconButton aria-label="delete" onClick={removeTodolist}>
          <Delete />
        </IconButton>
      </div>
      <AddItemForm addItem={addTask} />

      <ul className="text-black my-5">
        {props.tasks.map((t) => {
          const onRemoveHandler = () => props.removeTask(t.id, props.id)
          const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
            props.changeTaskStatus(t.id, e.currentTarget.checked, props.id)
          }
          const onChangeTitleHandler = (newValue: string) => {
            props.changeTaskTitle(t.id, newValue, props.id)
          }

          return (
            <li key={t.id} className={t.isDone ? "is-done" : ""}>
              <Checkbox color='secondary'
                checked={t.isDone}
                onChange={onChangeStatusHandler}
              />
              <EditableSpan 
              title={t.title} 
              onChange={onChangeTitleHandler}
              />
              <IconButton className=" border-gray-300 mx-5" aria-label="delete" onClick={onRemoveHandler}>
                <Delete />
              </IconButton>
            </li>
          )
        })}
      </ul>

      <div className="space-x-2">
        <Button variant={props.filter === "all" ? "contained" : "text"}
          onClick={onAllClickHandler}
        >
          All{" "}
        </Button>
        <Button variant={props.filter === "active" ? "contained" : "text"}
          onClick={onActiveClickHandler}
        >
          Active{" "}
        </Button>
        <Button color="secondary" variant={props.filter === "completed" ? "contained" : "text"}
          onClick={onCompletedClickHandler}
        >
          completed{" "}
        </Button>
      </div>
    </div>
  )
}