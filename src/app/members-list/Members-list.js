"use client";

import { useState, useReducer } from "react";
import { addMember, editMember, deleteMember } from "./actions";
import { reducer } from "./reducer";

export function MembersList() {
  const [state, dispatch] = useReducer(reducer, []);
  const [member, setMember] = useState("");

  function handleOnAddClick() {
    addMember(dispatch, member);
    setMember("");
  }

  function handleOnChangeMember(input) {
    const { value } = input.target;
    setMember(value);
  }

  return (
    <div>
      <input type="text" onChange={handleOnChangeMember}></input>
      <button value={member} onClick={handleOnAddClick}>
        Add Member
      </button>{" "}
      <br />
      <button>Edit Member</button> <br />
      <button>X</button>
    </div>
  );
}
