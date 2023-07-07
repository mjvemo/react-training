"use client";
import { State } from "./State";
import styles from "./state.module.css";
import { useState } from "react";
import { CompA } from "./CompA";
import { CompB } from "./CompB";

//  try using error, submitting or success
export default function Page() {
  // { status = "submitting" }
  // const [answer, setAnswer] = useState("");
  // const [error, setError] = useState(null);
  // const [status, setStatus] = useState("typing"); // 'typing', 'submitting', or 'success'

  // if (status === "success") {
  //   return <h1>That's right</h1>;
  // }

  // const [snacks, setSnacks] = useState(favoriteSnacks);
  // const [selectedId, setSelectedId] = useState(0);
  // const selectedSnacks = snacks.find((snack) => {
  //   snack.id === selectedId;
  // });

  const [name, setName] = useState("Chu");

  function handlerOnClick() {
    if (name === "Chu") {
      setName("MJ");
    } else {
      setName("Chu");
    }
  }

  return (
    <div>
      {/* <State></State> */}
      <div>
        <h1>Hello Wolrd!</h1>xs
        <div>
          <br />
          <CompA name={name} onClick={handlerOnClick} />
        </div>
        <br />
        <div>
          <CompB name={name} onClick={handlerOnClick} />
        </div>
      </div>
    </div>
  );
}
