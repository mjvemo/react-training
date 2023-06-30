"use client";
import { Products } from "./Products";
import { products as data } from "@/data/products";
// import "@/app/products.module.css";

export default function Page() {
  return (
    <div>
      <div>
        <Products products={data}></Products>
      </div>
    </div>
  );
}
