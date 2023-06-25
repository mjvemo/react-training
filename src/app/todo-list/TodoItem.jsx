"use client";

export function TodoItem({ task, onDeleteClickHandler, onDoneChangeHandler }) {
  function onDeleteClick() {
    onDeleteClickHandler(task.id);
  }

  function onDoneChange() {
    onDoneChangeHandler(task.id, !task.done);
  }

  return (
    <div>
      <div>
        <input
          type="checkbox"
          checked={task.done}
          onChange={onDoneChange}
        ></input>{" "}
        {task.description}
      </div>
      <div>
        <small>{task.id}</small> <button onClick={onDeleteClick}>X</button>
      </div>
      <hr />
    </div>
  );
}
