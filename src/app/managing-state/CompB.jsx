"use client";

import { useState } from "react";

export function CompB({ name, onClick }) {
  return (
    <div>
      <hr />
      <h3>This is component B</h3>
      <h4>Name is {name}</h4>
      <button onClick={() => onClick()}>Toggle name</button>
    </div>
  );
}
