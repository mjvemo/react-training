"use client";
import { useState } from "react";
import styles from "./state.module.css";

export function StateElement({ arg }) {
  return;
}

export function State() {
  // Reacting to input with state
  return (
    <div>
      <form>
        <br />
        <label>
          first Name: <b>Jane</b>
          <input type="text"></input>
        </label>
        <br />
        <label>
          last Name: <b>Jacobs</b>
          <input type="text"></input>
        </label>
        <button type="submit">Edit Profile</button>
        <p>
          <i>Hello, Jane Jacobs!</i>
        </p>
      </form>
    </div>
  );
}
