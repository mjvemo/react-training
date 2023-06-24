"use client";
import { useState } from "react";

export function Form() {
  // hook
  const [korean, setKorean] = useState({
    firstName: "Park",
    lastName: "Bo-gum",
    profession: "actor",
  });

  function handleChange(e) {
    setKorean({
      ...korean, // when using spread operator you don’t need to copy every property separately
      [e.target.name]: e.target.value, // specify a property with dynamic name.
    });
  }
  // updating objects in state
  return (
    <div className="form">
      <div>
        <div>
          First Name:
          <br /> <br />
          <input
            className="inputName"
            name="firstName"
            value={korean.firstName}
            onChange={handleChange}
          ></input>
        </div>
        <br /> <br />
        <label>
          Last Name:
          <br /> <br />
          <input
            className="inputName"
            name="lastName"
            value={korean.lastName}
            onChange={handleChange}
          ></input>
        </label>
        <br /> <br />
        <label>
          Profession:
          <br /> <br />
          <input
            className="inputName"
            name="profession"
            value={korean.profession}
            onChange={handleChange}
          ></input>
          <br />
          <br />
          Your thoughts:
          <br />
          <br />
          <textarea className="textarea" typeof="text"></textarea>
        </label>
      </div>
      <div>
        <p>
          {korean.firstName} {korean.lastName} ({korean.profession})
        </p>
        <br />
        <img
          src="https://kdramadiary.com/wp-content/uploads/2023/04/Park-Bo-Gum-IG-kdramadiary-e1680399451223.jpg"
          alt="bo-gum"
        />
      </div>
    </div>
  );
}
