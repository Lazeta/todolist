import { ChangeEvent, KeyboardEvent, useState } from "react";
import { FilterValuesType } from "../App";

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

type PropsType = {
  id: string;
  title: string;
  tasks: Array<TaskType>;
  removeTask: (taskId: string, todolistId: string) => void;
  changeFilter: (value: FilterValuesType, todolistId: string) => void;
  addTask: (title: string, todolistId: string) => void;
  changeTaskStatus: (
    taskId: string,
    isDone: boolean,
    todolistId: string
  ) => void;
  filter: FilterValuesType;
  removeTodolist: (todolistId: string) => void;
};

export type TaskObjType = {
  [key: string]: Array<TaskType>;
};

export function TodoList(props: PropsType) {
  const onAllClickHandler = () => props.changeFilter("all", props.id);
  const onActiveClickHandler = () => props.changeFilter("active", props.id);
  const oncompletedClickHandler = () =>
    props.changeFilter("completed", props.id);
  const removeTodolist = () => props.removeTodolist(props.id);

  return (
    <div className="font-sans px-5">
      <div className="flex items-baseline">
        <h3 className="text-3xl m-3">{props.title}</h3>
        <button onClick={removeTodolist}>X</button>
      </div>
      <AddItemForm id={props.id} addTask={props.addTask}/>

      <ul className="text-black my-5">
        {props.tasks.map((t) => {
          const onRemoveHandler = () => props.removeTask(t.id, props.id);
          const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            props.changeTaskStatus(t.id, e.currentTarget.checked, props.id);
          };

          return (
            <li key={t.id} className={t.isDone ? "is-done" : ""}>
              <input
                type="checkbox"
                checked={t.isDone}
                onChange={onChangeHandler}
              />
              <span> {t.title}</span>
              <button
                onClick={onRemoveHandler}
                className=" border-gray-300 mx-5 "
              >
                x
              </button>
            </li>
          );
        })}
      </ul>

      <div className="space-x-2">
        <button
          className={props.filter === "all" ? "active-filter" : ""}
          onClick={onAllClickHandler}
        >
          All{" "}
        </button>
        <button
          className={props.filter === "active" ? "active-filter" : ""}
          onClick={onActiveClickHandler}
        >
          Active{" "}
        </button>
        <button
          className={props.filter === "completed" ? "active-filter" : ""}
          onClick={oncompletedClickHandler}
        >
          completed{" "}
        </button>
      </div>
    </div>
  );
}

type AddItemFormPropsType = {
  addTask: (title: string, todolistId: string) => void
  id: string
}

function AddItemForm(props: AddItemFormPropsType) {
  const [title, setTitle] = useState("");
  const [error, setError] = useState<string | null>(null);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
  setTitle(e.currentTarget.value);
  
  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    setError(null);
    if (e.keyCode === 13) addTask();
  };

  const addTask = () => {
    if (title.trim() !== "") {
      props.addTask(title.trim(), props.id);
      setTitle("");
    } else {
      setError("Title is requared");
    }
  };

  return <div>
  <input
    value={title}
    onChange={onChangeHandler}
    onKeyDown={onKeyPressHandler}
    placeholder="enter text"
    className={error ? "error" : ""}
  />
  <button onClick={addTask} className="pl-2 pr-2">
    {" "}
    +{" "}
  </button>
  {error && <div className="error-message">{error}</div>}
</div>
}