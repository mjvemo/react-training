"use client";

import { useSelector, useDispatch } from "react-redux";
import { setActive } from "@/stores/slices/products.slice";

export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const active = useSelector(state => state.products.active);

  const handleOnClick = (elem) => {
    const id = elem.target.getAttribute("data-id");
    dispatch(setActive(id));
  };

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id} data-id={product.id} onClick={handleOnClick}>
            {product.name}
            { active === product.id && " - X"}
          </li>
        ))}
      </ul>
    </div>
  );
}
