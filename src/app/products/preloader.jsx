'use client';

import store from "@/stores";
import { useRef } from "react";
import { setProducts } from "@/stores/slices/products.slice";

export function Preloader({ products }) {
  const ref = useRef(false);

  if (!ref.current) {
    store.dispatch(setProducts(products));
    ref.current = true;
  }

  return null;
}
