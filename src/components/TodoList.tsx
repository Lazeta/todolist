import { FilterValuesType } from "../App"

export type TaskType = {
  id: number
  title: string
  isDone: boolean
}

type PropsType = {
  title: string
  tasks: Array<TaskType>
  removeTask: (id: number) => void
  changeFilter: (value: FilterValuesType) => void
}


export function TodoList(props: PropsType) {
    return (
      <div className="font-sans px-5">
        <h3 className="text-3xl m-3">{props.title}</h3>
        <div>
          <input type="text" placeholder="text"/>
          <button className='pl-2 pr-2'> + </button>
        </div>

        <ul className='text-black my-5'>
          {
            props.tasks.map( t => 
            <li><input type="checkbox" checked={t.isDone}/>
              <span> {t.title}</span>
              <button onClick={() => { props.removeTask(t.id) }} className=" border-gray-300 mx-5 ">x</button>
            </li> )
          }
        </ul>

        <div className="space-x-2">
          <button onClick={() => { props.changeFilter('all') }}>All </button>
          <button onClick={() => { props.changeFilter('active') }}>Active </button>
          <button onClick={() => { props.changeFilter('complited') }}>Completed </button>
        </div>
      </div>
    );
  }