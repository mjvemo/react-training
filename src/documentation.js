// Rules of JSX

// 1) Return a single root element
// Fragment: use <> </> or <div> </div> to wrap them in a single parent
// 2) Close all the tags <img> </img>
// 3) camelCase most of things example stroke-width you use strokeWidth <img className="photo" />
// 4) Use a JSX converter for HTML

// Pasing Strings with ""

// export default function Avatar() {
//   return (
//     <img
//       className="avatar"
//       src="https://i.imgur.com/7vQD0fPs.jpg"
//       alt="Gregorio Y. Zara"
//     />
//   );
// }

// Here, "https://i.imgur.com/7vQD0fPs.jpg" and "Gregorio Y. Zara" are being passed as strings.

// But what if you want to dynamically specify the src or alt text? You could use a value from JavaScript by replacing " and " with { and }

// export default function Avatar() {
//   const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
//   const description = "Gregorio Y. Zara";
//   return <img className="avatar" src={avatar} alt={description} />;
// }

// It’s possible to use JavaScript inside it—with curly braces { }

// export default function TodoList() {
//   const name = "Gregorio Y. Zara";
//   return <h1>{name}'s To Do List</h1>;
// }

// Using Doble curly { } to pass a JS object in JSX, you must wrap the object in another pair of curly braces: person={{ name: "Hedy Lamarr", inventions: 5 }}.

// ================== Pasing Props to a Component =======================

// export default function Profile() {
//   return (
//     <Avatar person={{ name: "Lin Lanying", imageId: "1bX5QH6" }} size={100} />
//   );
// }

// function Avatar({ person, size }) {
//   return (
//     <img
//       className="avatar"
//       src={getImageUrl(person)}
//       alt={person.name} // "Lin Lanying"
//       width={size}
//       height={size}
//     />
//   );
// }

// ================== default value ===========================
// specify a default value

// function Avatar({ person, size = 100 }) {
//   // ...
// }

// if <Avatar person={...} /> is rendered with no size prop, the size will be set to 100
//The default value is only used if the size prop is missing or if you pass size={undefined}. But if you pass size={null} or size={0}, the default value will not be used.

// ================== spread operator ===========================
// Using spread operator

// function Profile(props) {
//   return (
//     <div className="card">
//       <Avatar {...props} />
//     </div>
//   );
// }

// ================== Pasing JSX as children ===========================

// <Card> Component Parent
//  <Avatar /> Children
// </Card>; Component Parent

// export default function Profile() {
//   return (
//     <Card>
//       <Avatar
//         size={100}
//         person={{
//           name: 'Katsuko Saruhashi',
//           imageId: 'YfeOqp2'
//         }}
//       />
//     </Card>
//   );
// }

// ================== prop over time ===========================
// Props change over time

// export default function Clock({ color, time }) {
//   return <h1 style={{ color: color }}>{time}</h1>;
// }

// color can be selected and time changes every second

// ================== adjust prop using conditional ===========================
// based on prop adjust image size

// import { getImageUrl } from "./utils.js";

// function Avatar({ person, size }) {
//   let thumbnailSize = "s";

//   if (size > 90) {
//     thumbnailSize = "b";
//   }
//   return (
//     <img
//       className="avatar"
//       src={getImageUrl(person, "b")}
//       alt={person.name}
//       width={size}
//       height={size}
//     />
//   );
// }

// export default function Profile() {
//   return (
//     <div>
//       <Avatar
//         size={40}
//         person={{
//           name: "Gregorio Y. Zara",
//           imageId: "7vQD0fP",
//         }}
//       />
//       <Avatar
//         size={100}
//         person={{
//           name: "Gregorio Y. Zara",
//           imageId: "7vQD0fP",
//         }}
//       />
//     </div>
//   );
// }

// ====================== pasing JSX in a children prop ==================

//  function Card({children}) {
//       <div className="card">
//          <div className="card-content">
//          {children}
//          </div>
//          </div>

// }

// export default function Profile() {
//   return (
//     <div>
//       <Card>
//         <h1>Photo</h1>
//         <img
//           className="avatar"
//           src="https://i.imgur.com/OKS67lhm.jpg"
//           alt="Aklilu Lemma"
//           width={100}
//           height={100}
//         />
//       </Card>
//       <Card>
//         <h1>About</h1>
//         <p>
//           Aklilu Lemma was a distinguished Ethiopian scientist who discovered a
//           natural treatment to schistosomiasis.
//         </p>
//       </Card>
//     </div>
//   );
// }

// ==================== Using Tittle ====================

// export default function Profile() {
//   return (
//     <div>
//       <Card title="Photo">
//         <img
//           className="avatar"
//           src="https://i.imgur.com/OKS67lhm.jpg"
//           alt="Aklilu Lemma"
//           width={100}
//           height={100}
//         />
//       </Card>
//       <Card title="About">
//         <p>
//           Aklilu Lemma was a distinguished Ethiopian scientist who discovered a
//           natural treatment to schistosomiasis.
//         </p>
//       </Card>
//     </div>
//   );
// }

// Conditional Rendering

// =============== Conditionally returning JSX =============
// you have a PackingList component rendering several Items, which can be marked as packed or not

// function Item({ name, isPacked }) {
//   return <li className="item">{name}</li>;
// }

// export default function PackingList() {
//   return (
//     <section>
//       <h1>Sally Ride's Packing List</h1>
//       <ul>
//         <Item isPacked={true} name="Space suit" />
//         <Item isPacked={true} name="Helmet with a golden leaf" />
//         <Item isPacked={false} name="Photo of Tam" />
//       </ul>
//     </section>
//   );
// }

// ================== Returning Null =================

// function Item({ name, isPacked }) {
//   if (isPacked) {
//     return null;
//   }
//   return <li className="item">{name}</li>;
// }

//================== ternary operator ================

// if (isPacked) {
//   return <li className="item">{name} ✔</li>;
// }
// return <li className="item">{name}</li>;

// intead of the previous example you can use ternary operator like this:

// return <li className="item">{isPacked ? name + " ✔" : name}</li>;

// =============== Using AND operator ========================

// function Item({ name, isPacked }) {
//   return (
//     <li className="item">
//       {name} {isPacked && "✔"}
//     </li>
//   );
// }

// =============== Conditionally assigning JSX to a variable =======================

// function Item({ name, isPacked }) {
//   let itemContent = name;
//   if (isPacked) {
//     itemContent = name + " ✔";
//   }
//   return <li className="item">{itemContent}</li>;
// }

// ============= using 'del' tag 'tachar' =====================

//function Item({ name, isPacked }) {
//   let itemContent = name;
//   if (isPacked) {
//     itemContent = (
//       <del>
//         {name + " ✔"}
//       </del>
//     );
//   }
//   return (
//     <li className="item">
//       {itemContent}
//     </li>
//   );
// }

// Exercise
// Use the conditional operator (cond ? a : b) to render a ❌ if isPacked isn’t true.

// function Item({ name, isPacked }) {
//   return (
//     <li className="item">
//       {name} {!isPacked && "❌"}
//     </li>
//   );
// }

// export default function PackingList() {
//   return (
//     <section>
//       <h1>Sally Ride's Packing List</h1>
//       <ul>
//         <Item isPacked={true} name="Space suit" />
//         <Item isPacked={true} name="Helmet with a golden leaf" />
//         <Item isPacked={false} name="Photo of Tam" />
//       </ul>
//     </section>
//   );
// }

// Practice AND operator
//In this example, each Item receives a numerical importance prop. Use the && operator to render ”(Importance: X)” in italics, but only for items that have non-zero importance. Your item list should end up looking like this:

// Space suit (Importance: 9)
// Helmet with a golden leaf
// Photo of Tam (Importance: 6)

// function Item({ name, importance }) {
//   return (
//     <li className="item">
//       {name}
//       {importance > 0 && " "}
//       {importance > 0 && <i>(Importance: {importance})</i>}
//     </li>
//   );
// }

// export default function PackingList() {
//   return (
//     <section>
//       <h1>Sally Ride's Packing List</h1>
//       <ul>
//         <Item importance={9} name="Space suit" />
//         <Item importance={0} name="Helmet with a golden leaf" />
//         <Item importance={6} name="Photo of Tam" />
//       </ul>
//     </section>
//   );
// }

// Challenge #3 Refactor a series of ? : to if and variables

// El elemento HTML <dl> representa una lista descriptiva. El elemento encierra una lista de grupos de términos (especificados con el uso del elemento <dt>) y de descripciones (proveídas con elementos <dd>).

// function Drink({ name }) {
//   return (
//     <section>
//       <h1>{name}</h1>
//       <dl> //
//         <dt>Part of plant</dt>
//         <dd>{name === "tea" ? "leaf" : "bean"}</dd>
//         <dt>Caffeine content</dt>
//         <dd>{name === "tea" ? "15–70 mg/cup" : "80–185 mg/cup"}</dd>
//         <dt>Age</dt>
//         <dd>{name === "tea" ? "4,000+ years" : "1,000+ years"}</dd>
//       </dl>
//     </section>
//   );
// }

// export default function DrinkList() {
//   return (
//     <div>
//       <Drink name="tea" />
//       <Drink name="coffee" />
//     </div>
//   );
// }

// CORRECT ASWER

// function Drink({ name }) {
//   let part, caffeine, age;

//   if (name === "tea") {
//     part = "leaf";
//     caffeine = "15-70 mg/cup";
//     age = "4,000+ years";
//   } else if (name === "coffee") {
//     part = "bean";
//     caffeine = "0–185 mg/cup";
//     age = "1,000+ years";
//   }
//   return (
//     <section>
//       <h1>{name}</h1>
//       <dl>
//         <dt>Parte de la planta:</dt>
//         <dd>{part}</dd>
//         <dt>Caffeine content:</dt>
//         <dd>{caffeine}</dd>
//         <dt>Age:</dt>
//         <dd>{age}</dd>
//       </dl>
//     </section>
//   );
// }

// RENDERING LIST

// Rendering data from arrays

// 1)
// const people = [
//   "Creola Katherine Johnson: mathematician",
//   "Mario José Molina-Pasquel Henríquez: chemist",
//   "Mohammad Abdus Salam: physicist",
//   "Percy Lavon Julian: chemist",
//   "Subrahmanyan Chandrasekhar: astrophysicist",
// ];

// 2)
// export default function List() {
//   const listItems = people.map((person) => <li>{person}</li>);
// 3)
//   return <ul>{listItems}</ul>;
// }

// Practice

// const members = [
//   "Lalisa Manobal",
//   "Kim Jennie",
//   "Kim Jisoo",
//   "Park Chaegyoung",
// ];

// export default function Members() {
//   const listOfMembers = members.map((idol) => <li>{idol}</li>);
//   return <ul>{listOfMembers}</ul>;
// }

// =================== Filtering Arrays of Items(obj) ================

// const people = [
//   {
//     id: 0,
//     name: "Creola Katherine Johnson",
//     profession: "mathematician",
//   },
//   {
//     id: 1,
//     name: "Mario José Molina-Pasquel Henríquez",
//     profession: "chemist",
//   },
//   {
//     id: 2,
//     name: "Mohammad Abdus Salam",
//     profession: "physicist",
//   },
//   {
//     name: "Percy Lavon Julian",
//     profession: "chemist",
//   },
//   {
//     name: "Subrahmanyan Chandrasekhar",
//     profession: "astrophysicist",
//   },
// ];

// You need to give each array item a key — a string or a number that uniquely identifies it among other items in that array
// <li key={person.id}>...</li>

// export default function List() {
//   const chemists = people.filter((person) => person.profession === "chemist");
//   const listItems = chemists.map((person) => (
//     <li key={person.id}> have to use a key to get to the Item Id
//       <img src={getImageUrl(person)} alt={person.name} />
//       <p>
//         <b>{person.name}:</b>
//         {" " + person.profession + " "}
//         known for {person.accomplishment}
//       </p>
//     </li>
//   ));
//   return <ul>{listItems}</ul>;
// }

// ====================

// Challenge #1 Split List in two. One specific profession and two the rest...

// export default function List() {
//   const listItems = people.map(person =>
//     <li key={person.id}>
//       <img
//         src={getImageUrl(person)}
//         alt={person.name}
//       />
//       <p>
//         <b>{person.name}:</b>
//         {' ' + person.profession + ' '}
//         known for {person.accomplishment}
//       </p>
//     </li>
//   );

// Challenge #2 Nested List in one Component
// import { recipes } from "./data.js";

// export default function RecipeList() {
//   return (
//     <div>
//       <h1>Recipes</h1>
//       {recipes.map((recipe) => (
//         <div key={recipe.id}>
//           <h2>{recipe.name}</h2>
//           <ul>
//             {recipe.ingredients.map((ingredient) => (
//               <li key={ingredient}> {ingredient} </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// }

// Challenge #3  Couldn't do it

//function Recipe({ id, name, ingredients }) {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <ul>
//         {ingredients.map(ingredient =>
//           <li key={ingredient}>
//             {ingredient}
//           </li>
//         )}
//       </ul>
//     </div>
//   );
// }

// export default function RecipeList() {
//   return (
//     <div>
//       <h1>Recipes</h1>
//       {recipes.map(recipe =>
//         <Recipe {...recipe} key={recipe.id} />
//       )}
//     </div>
//   );
// }

// Challenge #4  Big No for me!
// List with a separator
// https://react.dev/learn/rendering-lists#challenges

// ================= KEEPING COMPONENTS PURE =====================
//Purity: Components as formulas
// In computer science (and especially the world of functional programming), a pure function is a function with the following characteristics:

// It minds its own business. It does not change any objects or variables that existed before it was called.
// Same inputs, same output. Given the same inputs, a pure function should always return the same result.
// function double(number) {
//   return 2 * number;
// }

// function Recipe({ drinkers }) {
//   return (
//     <ol>
//       <li>Boil {drinkers} cups of water.</li>
//       <li>
//         Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.
//       </li>
//       <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
//     </ol>
//   );
// }

// export default function App() {
//   return (
//     <section>
//       <h1>Spiced Chai Recipe</h1>
//       <h2>For two</h2>
//       <Recipe drinkers={2} />
//       <h2>For a gathering</h2>
//       <Recipe drinkers={4} />
//     </section>
//   );
// }

// Side Effects: (un)intended consequences
// Impure functions unpredictable result

// function Cup() {
//   // Bad: changing a preexisting variable!
//   guest = guest + 1;
//   return <h2>Tea cup for guest #{guest}</h2>;
// }

// export default function TeaSet() {
//   return (
//     <>
//       <Cup />
//       <Cup />
//       <Cup />
//     </>
//   );
// }

// How to fix it convert to pure function
//function Cup({ guest }) {
//   return <h2>Tea cup for guest #{guest}</h2>;
// }

// export default function TeaSet() {
//   return (
//     <>
//       <Cup guest={1} />
//       <Cup guest={2} />
//       <Cup guest={3} />
//     </>
//   );
// }

// ================ Local mutation: Your component’s little secret ==================

//function Cup({ guest }) {
//   return <h2>Tea cup for guest #{guest}</h2>;
// }

// export default function TeaGathering() {
//   let cups = [];
//   for (let i = 1; i <= 12; i++) {
//     cups.push(<Cup key={i} guest={i} />);
//   }
//   return cups;
// }

// if the cups variable or the [] array were created outside the TeaGathering function, this would be a huge problem! You would be changing a preexisting object by pushing items into that array.

// Where you can cause side effects
// While functional programming relies heavily on purity, at some point, somewhere, something has to change. That’s kind of the point of programming! These changes—updating the screen, starting an animation, changing the data—are called side effects. They’re things that happen “on the side”, not during rendering

// Side effects usually belong inside event handlers.
//Event handlers are functions that React runs when you perform some action
//https://react.dev/learn/keeping-components-pure#challenges

// Adding Interactivity

//Responding to events
// View Data.jsx example

//State: a component’s memory
// hooks
// const [index, setIndex] = useState(0);
// const [showMore, setShowMore] = useState(false);

// State as a snapshot

// export default function Form() {
//   const [to, setTo] = useState("Alice");
//   const [message, setMessage] = useState("Hello");

//   function handleSubmit(e) {
//     e.preventDefault();
//     setTimeout(() => {
//       alert(`You said ${message} to ${to}`);
//     }, 5000);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         To:{" "}
//         <select value={to} onChange={(e) => setTo(e.target.value)}>
//           <option value="Alice">Alice</option>
//           <option value="Bob">Bob</option>
//         </select>
//       </label>
//       <textarea
//         placeholder="Message"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//       />
//       <button type="submit">Send</button>
//     </form>
//   );
// }

// Queueing a Series of State Updates
//https://react.dev/learn/queueing-a-series-of-state-updates

// ============== Updating objects in state ===================
// Copying objects with the spread syntax
// setPerson({
//   ...person, // Copy the old fields
//   firstName: e.target.value, // But override this one
// });
// Updating a nested object
// setPerson({
//   ...person, // Copy other fields
//   artwork: {
//     // but replace the artwork
//     ...person.artwork, // with the same one
//     city: "New Delhi", // but in New Delhi!
//   },
// });

// Write concise update logic with Immer
// import { useImmer } from "use-immer";
// updatePerson(draft => {
//   draft.artwork.city = 'Lagos';
// });

//  challenge
// 1) function handlePlusClick() {
//     player.score++;
//   }

// solution:
// function handlePlusClick() {
//     setPlayer({
//       ...player,
//       score: player.score + 1
//     })
//     player.score++;
//   }

// challenge #2

// {
//   /* <Background position={initialPosition} />; Error
// }

// {
//   /* <Background position={handleMove} />; Right
// }

// Update an objct with Immer

// export default function Canvas() {
//   const [shape, updateShape] = useImmer({
//     color: 'orange',
//     position: initialPosition
//   });

// function handleColorChange(e) {
//   updateShape((draft) => {
//     draft.color = e.target.value;
//   });
// }

// Updating Arrays in State

// in React you should use for adding : concat, [...arr],
// example:

// let nextId = 0;

// export default function List() {
//   const [name, setName] = useState("");
//   const [artists, setArtists] = useState([]);

//   return (
//     <>
//       <h1>Inspiring sculptors:</h1>
//       <input value={name} onChange={(e) => setName(e.target.value)} />
//       <button
//         onClick={() => {
//           setArtists([...artists, { id: nextId++, name: name }]);
//         }}
//       >
//         Add
//       </button>
//       <ul>
//         {artists.map((artist) => (
//           <li key={artist.id}>{artist.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// ==================== change the array elements at the end =================
// setArtists([
//   { id: nextId++, name: name },
//   ...artists, // Put old items at the end
// ]);

// removing: filter, slice
// use filter to create a new arrat descarting one element
/* <>
  <h1>Inspiring sculptors:</h1>
  <ul>
    {artists.map((artist) => (
      <li key={artist.id}>
        {artist.name}{" "}
        <button
          onClick={() => {
            setArtists(artists.filter((a) => a.id !== artist.id));
          }}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
</>; */

// Transforming Array: map,
// If you want to change some or all items of the array, you can use map() to create a new array

//    const nextShapes = shapes.map(shape => {
//       if (shape.type === 'square') {
//         // No change
//         return shape;
//       } else {
//         // Return a new circle 50px below
//         return {
//           ...shape,
//           y: shape.y + 50,
//         };
//       }
//     });
//     // Re-render with the new array
//     setShapes(nextShapes);
//   }

// Replacing items in Array
// To replace an item, create a new array with map. Inside your map call, you will receive the item index as the second argument

// let initialCounters = [0, 0, 0];

// export default function CounterList() {
//   const [counters, setCounters] = useState(initialCounters);

//   function handleIncrementClick(index) {
//     const nextCounters = counters.map((c, i) => {
//       if (i === index) {
//         // Increment the clicked counter
//         return c + 1;
//       } else {
//         // The rest haven't changed
//         return c;
//       }
//     });
//     setCounters(nextCounters);
//   }

//   return (
//     <ul>
//       {counters.map((counter, i) => (
//         <li key={i}>
//           {counter}
//           <button
//             onClick={() => {
//               handleIncrementClick(i);
//             }}
//           >
//             +1
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// }

// Inserting into an array
// Sometimes, you may want to insert an item at a particular position that’s neither at the beginning nor at the end. To do this, you can use the ... array spread syntax together with the slice() method.

// let nextId = 3;
// const initialArtists = [
//   { id: 0, name: "Marta Colvin Andrade" },
//   { id: 1, name: "Lamidi Olonade Fakeye" },
//   { id: 2, name: "Louise Nevelson" },
// ];

// export default function List() {
//   const [name, setName] = useState("");
//   const [artists, setArtists] = useState(initialArtists);

function handleClick() {
  const insertAt = 1; // Could be any index
  const nextArtists = [
    // Items before the insertion point:
    ...artists.slice(0, insertAt),
    // New item:
    { id: nextId++, name: name },
    // Items after the insertion point:
    ...artists.slice(insertAt),
  ];
  setArtists(nextArtists);
  setName("");
}

//   return (
//     <>
//       <h1>Inspiring sculptors:</h1>
//       <input value={name} onChange={(e) => setName(e.target.value)} />
//       <button onClick={handleClick}>Insert</button>
//       <ul>
//         {artists.map((artist) => (
//           <li key={artist.id}>{artist.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// sorting: copy the array first
