import { useState, ChangeEvent, KeyboardEvent } from "react"
import { IconButton, TextField } from "@mui/material";
import { ControlPoint } from "@mui/icons-material";

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
    <TextField
      variant={'standard'}
      label={''}
      value={title}
      onChange={onChangeHandler}
      onKeyDown={onKeyPressHandler}
      error={!!error}
      helperText={error}
     />
    <IconButton onClick={addItem} color={'primary'}>
      <ControlPoint/>
    </IconButton>
  </div>
}
