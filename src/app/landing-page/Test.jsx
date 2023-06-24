"use client";
import { useState } from "react";

let nextId = 0;
// Adding to Array
export function Test() {
  const [shape, setShape] = useState("");
  const [x, setX] = useState([]);

  return (
    <div>
      <h1>List of Members</h1>
      <input value={shape} onChange={(e) => setShape(e.target.value)}></input>
      <button
        onClick={() => {
          setX([...x, { id: nextId++, name: shape }]);
        }}
      >
        {" "}
        Add member
      </button>
      <ul>
        {x.map((x) => (
          <li key={x.id}>{x.name}</li>
        ))}
      </ul>
    </div>
  );
}

// Deleting item from array

let firstMembers = [
  { id: 1, name: "Lisa Manobal" },
  { id: 2, name: "Kim Jennie" },
  { id: 3, name: "Kim Jisoo" },
];
export function Delete() {
  const [member, setMember] = useState(firstMembers);

  return (
    <div>
      <h1>Remove Members</h1>
      <ul>
        {member.map((member) => (
          <li key={member.id}>
            {member.name}{" "}
            <button
              onClick={() => {
                setMember(member.filter((x) => x.id !== member.id));
              }}
            >
              Delete member
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Transforming Array: map

let initialShape = [
  {
    id: 0,
    type: "circle",
    x: 100,
    y: 120,
  },
  {
    id: 1,
    type: "square",
    x: 100,
    y: 250,
  },
  {
    id: 2,
    type: "circle",
    x: 100,
    y: 370,
  },
];

export function Transform() {
  const [position, setPosition] = useState(initialShape);

  function handleClick() {
    const newPosition = position.map((shape) => {
      // shape.type === 'square'
      if (shape.id === 1) {
        return shape;
      } else {
        return {
          ...shape,
          x: shape.x + 50,
        };
      }
    });
    setPosition(newPosition);
  }
  return (
    <div>
      <button onClick={handleClick} className="buttonBlink">
        Change shape position
      </button>
      {position.map((shapes) => (
        <div
          key={shapes.id}
          style={{
            background: "black",
            position: "absolute",
            left: shapes.x,
            top: shapes.y,
            borderRadius: shapes.type === "circle" ? "50%" : "",
            width: 30,
            height: 30,
          }}
        ></div>
      ))}
    </div>
  );
}

// Inserting into an Array
const listOfIdols = [
  { id: 0, name: "Lalisa Manobal" },
  { id: 1, name: "Park Chaeyong" },
  { id: 2, name: "Kim Jisoo Rabbit" },
  { id: 2, name: "Kim Jennie" },
];
let initialId = 4;

export function Insert() {
  const [name, setName] = useState("");
  const [idol, setIdol] = useState(listOfIdols);

  function handleClickInsert() {
    const insertPosition = 1;
    const newIdol = [
      ...idol.slice(0, insertPosition),
      { id: initialId++, name: name },
      ...idol.slice(insertPosition),
    ];
    setIdol(newIdol);
    setName("");
  }

  return (
    <>
      <div className="tittleContainer">
        <h1>Insert New Idol</h1>
      </div>
      <div className="insertInput">
        <input
          className="inputName"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="buttonBlink" onClick={handleClickInsert}>
          Insert
        </button>

        <ul>
          {idol.map((idol) => (
            <li key={idol.id}>{idol.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

// Reverse Order

// Updating objects inside arrays

// Challenge 1 of 4: Update an item in the shopping cart

const initialProducts = [
  {
    id: 0,
    name: "Baklava",
    count: 1,
  },
  {
    id: 1,
    name: "Cheese",
    count: 5,
  },
  {
    id: 2,
    name: "Spaghetti",
    count: 2,
  },
];

export function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts);

  function handleIncreaseClick(productId) {
    setProducts(
      products.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            count: product.count + 1,
          };
        } else {
          return product;
        }
      })
    );
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            onClick={() => {
              handleIncreaseClick(product.id);
            }}
          >
            +
          </button>
        </li>
      ))}
    </ul>
  );
}

// Challenge 2 of 4: Remove an item from the shopping cart

export default function RemoveItem() {
  const [products, setProducts] = useState(initialProducts);

  function handleIncreaseClick(productId) {
    setProducts(
      products.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            count: product.count + 1,
          };
        } else {
          return product;
        }
      })
    );
  }

  function handleDecreaseClick(productId) {
    let nextProduct = products.map((product) => {
      if (product.id !== productId) {
        return {
          ...product,
          count: product.count - 1,
        };
      } else {
        return product;
      }
    });
    nextProduct = nextProduct.filter((p) => p.count > 0);
    setProducts(nextProduct);
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            onClick={() => {
              handleIncreaseClick(product.id);
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              handleDecreaseClick(product.Id);
            }}
          >
            –
          </button>
        </li>
      ))}
    </ul>
  );
}

// Challenge 3 of 4: Fix the mutations using non-mutative methods

let newId = 3;

const initialTodos = [
  { id: 0, title: "Buy milk", done: true },
  { id: 1, title: "Eat tacos", done: false },
  { id: 2, title: "Brew tea", done: false },
];

export function TaskApp() {
  const [todos, setTodos] = useState(initialTodos);
  // input
  function handleAddTodo(title) {
    setTodos([...todos, { id: newId++, title: title, done: false }]);
  }
  // selector / edit
  function handleChangeTodo(nextTodo) {
    setTodos(
      todos.map((to) => {
        if (to.id === nextTodo.id) {
          return nextTodo;
        } else {
          return to;
        }
      })
    );
  }
  // button delete
  function handleDeleteTodo(todoId) {
    setTodos(todos.filter((t) => t.id !== todoId));
  }

  return (
    <>
      <AddTodo onAddTodo={handleAddTodo} />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}

// Challenge 4 of 4: Fix the mutations using Immer // Can't use it
