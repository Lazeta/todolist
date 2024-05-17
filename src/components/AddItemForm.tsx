import { useState, ChangeEvent, KeyboardEvent } from "react";

type AddItemFormPropsType = {
  addItem: (title: string) => void
}

export function AddItemForm(props: AddItemFormPropsType) {
  const [title, setTitle] = useState("");
  const [error, setError] = useState<string | null>(null);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value);

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    setError(null);
    if (e.keyCode === 13) addItem();
  };

  const addItem = () => {
    if (title.trim() !== "") {
      props.addItem(title.trim());
      setTitle("");
    } else {
      setError("Title is requared");
    }
  };

  return <div>
    <input className={error ? "error" : ""}
      value={title}
      onChange={onChangeHandler}
      onKeyDown={onKeyPressHandler}
     />
    <button className="pl-2 pr-2" onClick={addItem}>+</button>
    {error && <div className="error-message">{error}</div>}
  </div>;
}
