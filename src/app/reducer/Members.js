"use client";
import { useState, useReducer } from "react";
import { reducer } from "./reducer";
import { addReducer, deleteReducer } from "./actions";

export function Members() {
  const [state, dispatch] = useReducer(reducer, { people: [] });
  const [name, setName] = useState(" ");

  function handleOnChange(input) {
    setName(input.target.value);
  }
  function handleOnClick() {
    dispatch(addReducer(name));
    setName("");
  }

  function handleOnClickDelete(id) {
    dispatch(deleteReducer(id));
  }

  return (
    <div>
      <div>
        <label>
          {" "}
          Add Members Here
          <input
            value={name}
            onChange={handleOnChange}
            type="text"
            placeholder="reducer"
          ></input>
        </label>
        <button onClick={handleOnClick}>Add Reducer</button>
      </div>
      <br></br>
      <div>
        <h1>Members List</h1>
        <br></br>
        <ul>
          {state.people.map((person) => {
            return (
              <li key={person.id}>
                <div>
                  {person.name} <b></b>
                  <button onClick={() => handleOnClickDelete(person.id)}>
                    X
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
