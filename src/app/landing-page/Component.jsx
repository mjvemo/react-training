"use client";
import { useState } from "react";
// import { users as data } from "@/data/users";

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

// Create a new component that receives an user as props and
// display in a list or any other format the following user info
// - fullname
// - age
// - email
// - contry code

// display a note if the user's age is higher than 25
// if the contry is Korea show the following text
// "한국은 정말 멋진 나라다."

// provide a checkbox that allows to filter out all users that are not from costa rica

// function UserProfile({ user }) {
//   const isOlderThan25 = user.age > 25;
//   const koreanCountry = user.address.country === "Korea";

//   return (
//     <div>
//       <li>
//         <div>
//           <strong>{user.firstName}</strong> <br />
//           <small>{user.age}</small> <br />
//           <small>{user.email}</small> <br />
//           <small>{user.address.countryCode}</small> <br />
//           {isOlderThan25 && (
//             <>
//               <small>This person is older than 25</small>
//               <br />
//             </>
//           )}
//           {/** AND operator example */}
//           {koreanCountry && (
//             <>
//               <small>한국은 정말 멋진 나라다</small>
//               <br />
//             </>
//           )}
//           {/** ternary operator example */}
//           {isOlderThan25 ? <span>young person</span> : <span>old person</span>}
//         </div>
//         <br />
//       </li>
//     </div>
//   );
// }

// function Profile({ users }) {
//   // const [checked, setChecked] = useState(false);

//   // function handleOnChange() {
//   //   setChecked(!checked);
//   // }

//   const [countryFilter, setCountryFilter] = useState("");

//   function handleOnChange(input) {
//     const value = input.target.value;

//     setCountryFilter(value);
//   }

//   //   const filteredUser = users.filter((user) => {
//   //     return user.address.country === "Costa Rica";
//   //   });

//   //   const toDisplayUsers = checked ? filteredUser : users;
//   let toDisplayUsers = users;

//   if (countryFilter.length >= 2) {
//     toDisplayUsers = users.filter((user) => {
//       const {
//         address: { country, countryCode },
//       } = user;

//       const lowerFilter = countryFilter.toLowerCase();

//       const isSameCountryName = country.toLowerCase().includes(lowerFilter);

//       const isSameCountryCode = countryCode.toLowerCase().includes(lowerFilter);

//       return isSameCountryName || isSameCountryCode;
//     });
//   }

//   return (
//     <div>
//       <h1>User Profile Info:</h1>
//       <br />
//       <label>
//         Type Contry Name
//         <br />
//         <input
//           //   type="checkbox"
//           //   checked={checked}
//           placeholder="country"
//           type="text"
//           value={countryFilter}
//           onChange={handleOnChange}
//         ></input>
//       </label>
//       <br />
//       <br />
//       <ul>
//         {/** map items example */}
//         {toDisplayUsers.map((user) => (
//           <UserProfile key={user.id} user={user} />
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default function Page() {
//   return (
//     <div>
//       <Profile users={data}></Profile>
//     </div>
//   );
// }
