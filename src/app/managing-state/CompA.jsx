"use client";

import { useState } from "react";
// re-render A & B parent state in both components
export function CompA({ name, onClick, query, onChange }) {
  return (
    <div>
      <hr />
      <h3>This is component A</h3>
      <h4>Name is {name}</h4>
      <input value={query} onChange={onChange}></input>
      <button onClick={() => onClick()}>Toggle name</button>
    </div>
  );
}
