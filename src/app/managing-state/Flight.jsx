"use client";
import { useState } from "react";
import styles from "./state.module.css";

export function Flight({ flight }) {
  const [snacks, setSnacks] = useState(flight);
  const [selectedId, setSelectedId] = useState(0);
  const selectedSnacks = snacks.find((snack) => {
    snack.id === selectedId;
  });

  function handleSnackChange(id, e) {
    setSnacks(
      snacks.map((snack) => {
        if (snack.id === id) {
          return { ...snack, tittle: e.target.value };
        } else {
          return snack;
        }
      })
    );
  }
  return (
    <div>
      <ul>
        {snacks.map((snack, index) => {
          <li key={snack.id}>
            <label>
              {" "}
              Select your flight snack
              <input
                type="text"
                value={snack.tittle}
                onChange={(e) => {
                  handleSnackChange(snack.id, e);
                }}
                placeholder="favorite snack"
              ></input>
            </label>
            <button
              onClick={() => {
                setSelectedId(snack.id);
              }}
            >
              Choose
            </button>
          </li>;
        })}
      </ul>
      <p>You picked {selectedSnacks.tittle} snack</p>
    </div>
  );
}
