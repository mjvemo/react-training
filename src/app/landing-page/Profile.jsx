"use client";
import { useState } from "react";

export function Profile({ image }) {
  console.log(image.alt);
  console.log(image.size);
  const [isOpen, setOpen] = useState(false);
  const [person, setPerson] = useState({ name: "Lalisa Manobal", age: 26 });
  console.log(person);
  // const handlerOnClick = () => {
  //   setInput(inputValue);
  // };
  const handleHideShowOnClick = () => {
    setOpen(!isOpen);
  };

  function handleinput(e) {
    setPerson({
      ...person, // Copy the old fields
      name: e.target.value, // But override this one
    });
  }

  return (
    <div>
      <div className="tittleContainer">
        <h1>Who's your Bias?</h1>
      </div>
      <div className="bias">
        <div>
          <div className="generalInput">
            <div>
              {" "}
              <input
                value={person.name}
                onChange={handleinput}
                className="inputName"
              ></input>
              <p>{person.name} </p>
            </div>
            <button className="buttonBlink2" onClick={handleHideShowOnClick}>
              {" "}
              Show
            </button>
          </div>
          <br />
          <br />
          <div>{isOpen && <img src={image.imageId} alt={image.alt} />}</div>
          {/* <h3>{biasGallery.name}</h3> */}
        </div>
      </div>
    </div>
  );
}
