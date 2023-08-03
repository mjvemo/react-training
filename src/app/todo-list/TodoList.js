// single responsability principle
// []
"use client";

import { useReducer, useState } from "react";
import { addTask } from "./actions";
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
//   items: [{
//     id: '',
//     task: '',
//     isCompleted: true, // :boolean
//   }]
// }

// Responsibility: iterate/render the items from the list
export function TodoList() {
  // renderizar la lista
  const [state, dispatch] = useReducer(reducer, { tasks: [] });
  const [description, setDescription] = useState("");

  function handleOnChangeDescription(input) {
    const { value } = input.target;
    setDescription(value);
  }

  function handleAddTaskOnClick() {
    dispatch(addTask({ description }));
    setDescription("");
  }

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
        {state.tasks.map((task) => (
          <TodoItem key={task.id} task={task} dispatch={dispatch} />
        ))}
      </ul>
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
