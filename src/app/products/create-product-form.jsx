'use client';

import { useState } from "react";
import { createProduct } from "@/lib/datastores/client";
import { addProduct } from '@/stores/slices/products.slice';

import { useDispatch } from "react-redux";

export default function CreateProductForm() {
  const dispatch = useDispatch();
  const [data, setData] = useState({ name: '', description: ''});

  const handleNameChange = (input) => {
    const value = input.target.value;

    setData({
      ...data,
      name: value,
    });
  }

  const handleDescriptionChange = (input) => {
    const value = input.target.value;

    setData({
      ...data,
      description: value,
    })
  }

  const handleClick = () => {
    createProduct(data).then(product => {
      dispatch(addProduct(product));
      setData({ name: '', description: ''});
    });
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
  }

  return (
    <form action={"#"} onSubmit={handleOnSubmit}>
      <label htmlFor="name">Name</label>
      <br/>
      <input name="name" value={data.name} onChange={handleNameChange}></input>
      <br/>
      <label htmlFor="description">Description</label>
      <br/>
      <input name="description" value={data.description} onChange={handleDescriptionChange}></input>
      <br/>
      <button onClick={handleClick}> Create Product </button>
    </form>
  )
}
