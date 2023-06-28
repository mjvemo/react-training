"use client";
import { products } from "@/app/landing-page/data/Product-Data";
import { useState } from "react";

export function Filter() {
  function handleInputFilter() {}
  return (
    <div>
      <h1>I'm a filter</h1>
      <input type="text" value={handleInputFilter}></input>
    </div>
  );
}
