// Thinking about UI declaratively

// You’ve seen how to implement a form imperatively above. To better understand how to think in React, you’ll walk through reimplementing this UI in React below:

// 1) Identify your component’s different visual states:

// all the different “states” of the UI the user might see:

// Empty: Form has a disabled “Submit” button.
// Typing: Form has an enabled “Submit” button.
// Submitting: Form is completely disabled. Spinner is shown.
// Success: “Thank you” message is shown instead of a form.
// Error: Same as Typing state, but with an extra error message.

// 2) Determine what triggers those state changes:

// You can trigger state updates in response to two kinds of inputs:

// Human inputs, like clicking a button, typing in a field, navigating a link.
// Computer inputs, like a network response arriving, a timeout completing, an image loading.

// - Changing the text input (human) should switch it from the Empty state to the Typing state or back, depending on whether the text box is empty or not.
// - Clicking the Submit button (human) should switch it to the Submitting state.
// - Successful network response (computer) should switch it to the Success state.
// - Failed network response (computer) should switch it to the Error state with the matching error message.

// 3) Represent the state in memory using useState
// represent the visual states of your component in memory with useState. Simplicity is key: each piece of state is a “moving piece”, and you want as few “moving pieces” as possible. More complexity leads to more bugs!

// const [answer, setAnswer] = useState("");
// const [isEmpty, setIsEmpty] = useState(true);
// const [isTyping, setIsTyping] = useState(false);
// const [isSubmitting, setIsSubmitting] = useState(false);
// const [isSuccess, setIsSuccess] = useState(false);
// const [error, setError] = useState(null);

// 4) Remove any non-essential state variables
// avoid duplication in the state content so you’re only tracking what is essential. Spending a little time on refactoring your state structure will make your components easier to understand, reduce duplication, and avoid unintended meanings.

// const [answer, setAnswer] = useState('');
// const [error, setError] = useState(null);
// const [status, setStatus] = useState('typing'); // 'typing', 'submitting', or 'success'

// 5) Connect the event handlers to set the state
// create event handlers that update the state. Below is the final form, with all event handlers wired up

//  async function handleSubmit(e) {
//    e.preventDefault();
//    setStatus("submitting");
//    try {
//      await submitForm(answer);
//      setStatus("success");
//    } catch (err) {
//      setStatus("typing");
//      setError(err);
//    }
//  }

//  function handleTextareaChange(e) {
//    setAnswer(e.target.value);
//  }

// Chosing the State Structure
// Principles for structuring state

// 1) Group related state. If you always update two or more state variables at the same time, consider merging them into a single state variable.
// 2) Avoid contradictions in state. When the state is structured in a way that several pieces of state may contradict and “disagree” with each other, you leave room for mistakes. Try to avoid this.
// 3) Avoid redundant state. If you can calculate some information from the component’s props or its existing state variables during rendering, you should not put that information into that component’s state.
// 4) Avoid duplication in state. When the same data is duplicated between multiple state variables, or within nested objects, it is difficult to keep them in sync. Reduce duplication when you can.
// 5) Avoid deeply nested state. Deeply hierarchical state is not very convenient to update. When possible, prefer to structure state in a flat way.

// Sharing state between components

// {https://www.youtube.com/watch?v=FR2iZRq17kE}
// When you want to coordinate two components, move their state to their common parent.
// Then pass the information down through props from their common parent.
// Finally, pass the event handlers down so that the children can change the parent’s state.
// It’s useful to consider components as “controlled” (driven by props) or “uncontrolled” (driven by state).

// Challenge #1 : Synced inputs

// export default function SyncedInputs() {
//   const [text, setText] = useState("");
//   function handleChange(e) {
//     setText(e.target.value);
//   }
//   return (
//     <>
//       <Input label={text} onChange={handleChange} />
//       <Input label={text} onChange={handleChange} />
//     </>
//   );
// }

// function Input({ label, onChange }) {
//   return (
//     <label>
//       {label} <input value={label} onChange={onChange} />
//     </label>
//   );
// }

// Challenge #2 : Filtering a list

// export default function FilterableList() {
//   const [query, setQuery] = useState("");
//   const results = filterItems(foods, query);
//   function handleChange(e) {
//     setQuery(e.target.value);
//   }
//   return (
//     <>
//       <SearchBar query={query} onChange={handleChange} />
//       <hr />
//       <List items={results} />
//     </>
//   );
// }
x;
// function SearchBar({ query, onChange }) {
//   return (
//     <label>
//       Search: <input value={query} onChange={onChange} />
//     </label>
//   );
// }

// function List({ items }) {
//   return (
//     <table>
//       <tbody>
//         {items.map((food) => (
//           <tr key={food.id}>
//             <td>{food.name}</td>
//             <td>{food.description}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }

// Preserving and Resetting State
// https://www.youtube.com/watch?v=9HYKSaorqHc
// https://www.youtube.com/watch?v=A5MNjgm_Ovc

// Challenge 1 of 5: Fix disappearing input text

// function Form() {
//   const [text, setText] = useState("");
//   return <textarea value={text} onChange={(e) => setText(e.target.value)} />;
// }

// export default function App() {
//   const [showHint, setShowHint] = useState(false);
//   return (
//     <div>
//       {showHint && (
//         <p>
//           <i>Hint: Your favorite city?</i>
//         </p>
//       )}
//       <Form />
//       {showHint ? (
//         <button
//           onClick={() => {
//             setShowHint(false);
//           }}
//         >
//           Hide hint
//         </button>
//       ) : (
//         <button
//           onClick={() => {
//             setShowHint(true);
//           }}
//         >
//           Show hint
//         </button>
//       )}
//     </div>
//   );
// }

// export default function App() {
//   const [showHint, setShowHint] = useState(false);
//   return (
//     <div>
//       {showHint && (
//         <p>
//           <i>Hint: Your favorite city?</i>
//         </p>
//       )}
//       <Form />
//         <button
//           onClick={() => {
//             setShowHint(!showHint);
//           }}
//         >
//          {showHint ? 'Hide' : 'Show'} hint
//         </button>
//     </div>
//   );
// }

// Challenge 2 of 5: Swap two form fields

// if (reverse) {
//   return (
//     <>
//       <Field key="last" label="Last name" />
//       <Field key="first" label="First name" />
//       {checkbox}
//     </>
//   );
// } else {
//   return (
//     <>
//       <Field key="first" label="First name" />
//       <Field key="last" label="Last name" />
//       {checkbox}
//     </>
//   );
// }

// Challenge 3 of 5: Reset a detail form
// added key={selectedId} to editContact
//   return (
//     <div>
//       <ContactList
//         contacts={contacts}
//         selectedId={selectedId}
//         onSelect={id => setSelectedId(id)}
//       />
//       <hr />
//       <EditContact
//         key={selectedId}
//         initialData={selectedContact}
//         onSave={handleSave}
//       />
//     </div>
//   )
// }

// Challenge 4 of 5: Clear an image while it’s loading
// added a key to the img tag

//   return (
//     <>
//       <button onClick={handleClick}>
//         Next
//       </button>
//       <h3>
//         Image {index + 1} of {images.length}
//       </h3>
//       <img key='image' src={image.src} />
//       <p>
//         {image.place}
//       </p>
//     </>
//   );
// }

// Challenge 5 of 5: Fix misplaced state in the list
// changed the key={i} to key={contact.id}

//   return (
//     <>
//       <label>
//         <input
//           type="checkbox"
//           value={reverse}
//           onChange={e => {
//             setReverse(e.target.checked)
//           }}
//         />{' '}
//         Show in reverse order
//       </label>
//       <ul>
//         {displayedContacts.map((contact, i) =>
//           <li key={contact.id}>
//             <Contact contact={contact} />
//           </li>
//         )}
//       </ul>
//     </>
//   );
