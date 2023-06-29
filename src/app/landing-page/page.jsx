"use client";
import { useState } from "react";
import { Component } from "./Component";
import { Profile } from "./Profile";
import { Toolbar } from "./Toolbar";
import { Form } from "./Form";
import { Test, Delete, Transform, Insert, ShoppingCart } from "./Test";
import { Filter } from "../products-page/Products";

export default function Page(props) {
  console.log(props);
  return (
    <div className="App">
      <div>
        <Component value="number 1" open={true} config={{ url: "" }}>
          <h1>Number1</h1>
        </Component>
      </div>
      <br />
      <div>
        <Transform></Transform>
      </div>
      <div>
        <Insert></Insert>
      </div>
      <div>
        <Profile
          image={{
            alt: "LaLisa Manobal",
            imageId:
              "https://phantom-marca.unidadeditorial.es/5bd564244bcf05d7ec02eaade2a14049/assets/multimedia/imagenes/2023/01/26/16747222095159.png",

            size: 100,
          }}
        >
          Number 2
        </Profile>
      </div>
      <div>
        <Toolbar
          likeImage={() => alert("Liked Image!")}
          loveImage={() => alert("Love Image!")}
        />
      </div>
      <div>
        <Form value="number 3" open={true} config={{ url: "" }}></Form>
      </div>
      <div>
        <Test value="number 4" open={true} config={{ url: "" }}></Test>
      </div>
      <div>
        <Delete></Delete>
      </div>
      <div>
        <ShoppingCart></ShoppingCart>
      </div>
      <div>
        <Filter value="number 5"></Filter>
      </div>
    </div>
  );
}

// import React from "react";

// export function Component(props) {
//   console.log("printing props");
//   console.log(props);
//   console.log(props.value);

//   // React hooks
//   const [value, setValue] = React.useState(0);

//   const [name, setName] = React.useState("");

//   const [isOpen, setOpen] = React.useState(true);

//   const handleOnClick = () => {
//     setValue(value + 1);
//   };

//   const handleInputOnChange = (input) => {
//     setName(input.target.value);
//   };

//   const handleHideShowOnClick = () => {
//     setOpen(!isOpen);
//   };

//   return (
//     <div>
//       {props.value}
//       <div>{props.children}</div>
//       Counter: {value}
//       <br />
//       <button onClick={handleOnClick}>Clickme</button>
//       <button onClick={handleHideShowOnClick}>Hide/Show</button>
//       <br />
//       <br />
//       <div>
//         {isOpen && (
//           <img src="https://i.pinimg.com/originals/68/0e/86/680e86389e9ddd944f9b9cde42eb8953.jpg" />
//         )}
//       </div>
//       <div>
//         <h3>Give me your name</h3>
//         <input onChange={handleInputOnChange} type="text" value={name} />
//       </div>
//       <div>
//         <h2> Your Name Is:</h2>
//         <span>{name}</span>
//       </div>
//     </div>
//   );
// }
