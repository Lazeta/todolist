import { ChangeEvent, KeyboardEvent, useState } from "react"
import { FilterValuesType } from "../App"

export type TaskType = {
  id: string
  title: string
  isDone: boolean
}

type PropsType = {
  title: string
  tasks: Array<TaskType>
  removeTask: (id: string) => void
  changeFilter: (value: FilterValuesType) => void
  addTask: (title: string) => void
}


export function TodoList(props: PropsType) {
  const [newTaskTitle, setNewTaskTitle] = useState("")

  const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(e.currentTarget.value)
  }
  const onKeyDownHandler = (e: KeyboardEvent) => {
    if (e.keyCode === 13) {
      props.addTask(newTaskTitle);
      setNewTaskTitle('')
    }
  }
  const addTask = () => {
    props.addTask(newTaskTitle)
    setNewTaskTitle('')
  }
  const onAllClickHandler = () => props.changeFilter('all')
  const onActiveClickHandler = () => props.changeFilter('active')
  const onComplitedClickHandler = () => props.changeFilter('complited')

  return (
    <div className="font-sans px-5">
      <h3 className="text-3xl m-3">{props.title}</h3>
      <div>
        <input value={newTaskTitle} onChange={onNewTitleChangeHandler}
          onKeyDown={onKeyDownHandler}
          placeholder="enter text" />
        <button onClick={addTask}
          className='pl-2 pr-2'> + </button>
      </div>

      <ul className='text-black my-5'>
        {
          props.tasks.map(t =>
            <li key={t.id}>
              <input type="checkbox" checked={t.isDone} />
              <span> {t.title}</span>
              <button onClick={() => { props.removeTask(t.id) }} className=" border-gray-300 mx-5 ">x</button>
            </li>)
        }
      </ul>

      <div className="space-x-2">
        <button onClick={onAllClickHandler}>All </button>
        <button onClick={onActiveClickHandler}>Active </button>
        <button onClick={onComplitedClickHandler}>Completed </button>
      </div>
    </div>
  );
}