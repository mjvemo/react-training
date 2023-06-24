"use client";
import { useState } from "react";

export function Component() {
  const [value, setValue] = useState(1000000);
  //   const [name, setName] = useState("");

  const handlerOnClick = () => {
    setValue(value + 1);
  };
  return (
    <div className="blink">
      <div>
        <img
          className="logo"
          src="https://logotipoz.com/wp-content/uploads/2022/03/Blackpink-Logo-png-transparente.png"
          alt="logo"
        />
      </div>

      <div className="containerBlinks">
        <div className="numberBlink">
          <h1>I'm a blink</h1> <b />
          {value}
        </div>

        <button className="buttonBlink" onClick={handlerOnClick}>
          Add Me as blink
        </button>
      </div>
    </div>
  );
}
