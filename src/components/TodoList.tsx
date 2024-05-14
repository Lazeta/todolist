import React from "react"

export type TaskType = {
  id: number
  title: string
  isDone: boolean
}

type PropsType = {
  title: string
  tasks: Array<TaskType>
  removeTask: Function
}


export default function TodoList(props: PropsType) {
    return (
      <div className="font-sans px-5">
        <h3 className="text-3xl">{props.title}</h3>
        <div>
          <input className='border-solid border-2 border-sky-500 rounded' type="text" placeholder="text"/>
          <button className='border-solid border-2 border-sky-500 rounded pl-2 pr-2'> + </button>
        </div>

        <ul className='text-black my-3'>
          {
            props.tasks.map( t => 
            <li className=""><input type="checkbox" checked={t.isDone}/>
              <span> {t.title}</span>
              <button onClick={() => { props.removeTask(t.id) }} className="border-solid border-2 border-sky-200 rounded px-2 mx-3 ">x</button>
            </li> )
          }
        </ul>

        <div className="space-x-2">
          <button className="border-solid border-2 border-sky-500 rounded px-2">All </button>
          <button className="border-solid border-2 border-sky-500 rounded px-2">Active </button>
          <button className="border-solid border-2 border-sky-500 rounded px-2">Completed </button>
        </div>
      </div>
    );
  }