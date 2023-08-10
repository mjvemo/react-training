// single responsability principle
// []
"use client";

import { useReducer, useState } from "react";
import {
  addTask,
  allCompletedTask,
  allPendingTask,
  deleteAll,
} from "./actions";
import { reducer } from "./reducer";
import { TodoItem } from "./TodoItem";

/**
 * 1. Layout for Todo List
 *     a. Title
 *     b. Any other styles or beauty requirements
 * 2. Create/Design initial state for the reducer
 * 3. Create Action Types
 */

// const fakeState = {
//   tasks: [{
//     id: '',
//     description: '',
//     isCompleted: true, // :boolean
//   }]
// }

// Responsibility: iterate/render the items from the list
export function TodoList() {
  // renderizar la lista
  const [state, dispatch] = useReducer(reducer, { tasks: [] });
  const [description, setDescription] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const [isPending, setIsPending] = useState([]);

  function handleOnChangeDescription(input) {
    const { value } = input.target;
    setDescription(value);
  }

  function handleAddTaskOnClick() {
    dispatch(addTask({ description }));
    setDescription("");
  }

  function handleOnClickAllCompleted() {
    dispatch(allCompletedTask());
  }

  function handleOnClickAllPending() {
    dispatch(allPendingTask());
  }

  function handleOnClickDeleteAll() {
    dispatch(deleteAll());
  }

  function handleOnClickHideShow() {
    setIsOpen(!isOpen);
  }

  const tasks = isOpen
    ? state.tasks
    : state.tasks.filter((task) => {
        return !task.isCompleted;
      });

  return (
    // Layout
    <div>
      <h1>TodoList</h1>
      <input
        type="text"
        value={description}
        onChange={handleOnChangeDescription}
      ></input>
      <button onClick={handleAddTaskOnClick}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <TodoItem key={task.id} task={task} dispatch={dispatch} />
        ))}
      </ul>
      <div>
        <button onClick={handleOnClickHideShow}>Show / Hide</button> <br />
        <button onClick={handleOnClickAllCompleted}>Mark all</button>
        <button onClick={handleOnClickAllPending}>Unmark all</button> <br />
        <button onClick={handleOnClickDeleteAll}>Delete all</button> <br />
      </div>
    </div>
  );
}

/**
 * Homework
 * 1. Create a button to hide/show all completed tasks (hint: state might need a new temporal array)
 * 2. Create buttom to check all tasks (even hidden ones) as completed
 * 3. Create buttom to uncheck all tasks (even hidden ones) as pending (not completed)
 * 4. Create buttom to delete all tasks
 * 5. Make it look a little bit better
 */
