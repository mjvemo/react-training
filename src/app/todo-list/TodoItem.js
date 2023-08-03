import { useState } from "react";
import { editTask, toggleTask, deleteTask } from "./actions";

export function TodoItem({ task, dispatch }) {
  const [description, setDescription] = useState(task.description);
  const [isEditEnabled, setIsEditEnabled] = useState(false);

  function handleOnClickEdit() {
    setIsEditEnabled(true);
  }

  function handleDescriptionOnChange(input) {
    const { value } = input.target;
    setDescription(value);
  }

  function handleOnClickSave() {
    dispatch(editTask(task.id, { description }));
    setIsEditEnabled(false);
  }

  function handleOnChangeToggle() {
    dispatch(toggleTask(task.id));
  }

  function handleOnClickDelete() {
    dispatch(deleteTask(task.id));
  }

  return (
    <>
      {!isEditEnabled ? (
        <li>
          <input
            type="checkbox"
            checked={task.isCompleted}
            onChange={handleOnChangeToggle}
          />
          {task.description}
          <button onClick={handleOnClickEdit}>Edit</button>
          <button onClick={handleOnClickDelete}>X</button>
        </li>
      ) : (
        <li>
          <input
            type="text"
            value={description}
            onChange={handleDescriptionOnChange}
          />
          <button onClick={handleOnClickSave}>Save</button>
        </li>
      )}
    </>
  );
}
