"use client";

import { useState, useReducer } from "react";
import styles from "@/app/style.module.css";
import { hooksReducer } from "./hooksReducer";
import { actionType } from "./actionType";

export function Hooks() {
  const [state, dispatch] = useReducer(hooksReducer, { count: 0 });
  // const [count, setCount] = useState(0);

  function handleOnClickIncrease() {
    // setCount (count + 1);
    dispatch({ type: actionType.INCREASE });
  }

  function handleOnClickDecrease() {
    // setCount (count - 1);
    dispatch({ type: actionType.DECREASE });
  }

  return (
    <div>
      <h1>Count Number</h1>
      <div className={styles.hook}>
        <button className={styles.button} onClick={handleOnClickIncrease}>
          +
        </button>
        <h2 className={styles.count}>{state.count}</h2>
        <button className={styles.button} onClick={handleOnClickDecrease}>
          -
        </button>
      </div>
    </div>
  );
}
