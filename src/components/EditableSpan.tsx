import { ChangeEvent, useState } from "react"

type EditableSpanPropsType = {
  title: string
  onChange: (newValue: string) => void
};
export function EditableSpan(props: EditableSpanPropsType) {
  let [editMode, setEditMode] = useState(false)
  let [title, setTitle] = useState(props.title)

  const activateEditMode = () => {
    setEditMode(true)
    setTitle(props.title)
  }
  const activateViewMode = () => {
    setEditMode(false)
    props.onChange(title)
  }
  const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)

  return editMode
    ? <input 
        value={title} 
        onChange={onChangeTitleHandler} 
        onBlur={activateViewMode} 
        autoFocus
        // onKeyDown={onKeyPressHandler}
      />
    : <span onDoubleClick={activateEditMode}>{props.title} </span>
}
