"use client";
import { useReducer, useState } from "react";
import reducer from "./reducer";
import { addTask, deleteTask, resetTasks, setTaskDoneValue } from "./actions";
import { TodoItem } from "./TodoItem";

export function TodoList() {
  /**
   * state {object} - initializer
   * action {object} - value sent over through dispatch function
   */

  const [tasks, dispatch] = useReducer(reducer, []);
  const [taskDescription, setTaskDescription] = useState("");

  function onAddTaskButtonClick() {
    addTask(dispatch, taskDescription);
    setTaskDescription("");
  }

  function onInputTaskDescriptionChange(input) {
    const { value } = input.target;

    setTaskDescription(value);
  }

  function onDeleteAllClick() {
    resetTasks(dispatch);
  }

  function onMarkAllDoneClick() {
    tasks.forEach((t) => {
      setTaskDoneValue(dispatch, t.id, true);
    });
  }

  function onMarkAllPendingClick() {
    tasks.forEach((t) => {
      setTaskDoneValue(dispatch, t.id, false);
    });
  }

  return (
    <div>
      <input
        type="text"
        value={taskDescription}
        onChange={onInputTaskDescriptionChange}
        placeholder="Task Description"
      />
      <button onClick={onAddTaskButtonClick}>Add Task</button>
      <button onClick={onDeleteAllClick}>Delete All</button>
      <button onClick={onMarkAllDoneClick}>Mark All Done</button>
      <button onClick={onMarkAllPendingClick}>Mark All Pending</button>

      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onDoneChangeHandler={(id, done) =>
            setTaskDoneValue(dispatch, id, done)
          }
          onDeleteClickHandler={(id) => deleteTask(dispatch, id)}
        />
      ))}
    </div>
  );
}
