"use client";
import { useReducer, useState } from "react";
import { v4 as uuid } from "uuid";
import { reducer } from "./reducer";
import { addMember, deleteMember } from "./actions";

export default function Page() {
  const [state, dispatch] = useReducer(reducer, {
    members: [],
  });

  const [name, setName] = useState("");

  function handleOnChange(input) {
    setName(input.target.value);
  }

  function handleOnClick() {
    dispatch(addMember(name));
    setName("");
  }

  function handleMemberDeleteClick(id) {
    dispatch(deleteMember(id));
  }

  return (
    <div>
      <div>
        <label>
          {" "}
          Add BP Member
          <input
            value={name}
            onChange={handleOnChange}
            type="text"
            placeholder="add member"
          ></input>
        </label>
        <button onClick={handleOnClick}>Add</button>
      </div>
      <div>
        <h1>BP Members</h1>
        <ul>
          {state.members.map((member) => {
            return (
              <li key={member.id}>
                <div>
                  {member.name}
                  <button onClick={() => handleMemberDeleteClick(member.id)}>
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
