"use client";
import { useState } from "react";
import styles from "./products.module.css";

export function ProductItem({ product }) {
  const biggerThanTenGrand = product.price > 10000;
  const valueSale = product.isOnsale;
  const descount = product.price - (10 * product.price) / 100;
  const finalPrice = valueSale ? descount : product.price;

  return (
    <div>
      <div className={styles.imgContainer}>
        <img className={styles.img1} src={product.imageUrl}></img>
        <div className={styles.info}>
          <div className={styles.mainContainer}>
            <h1>{product.name}</h1>
          </div>
          <small>{product.category}</small>

          <small className={biggerThanTenGrand && styles.textRed}>
            {finalPrice}
          </small>

          <small>stock: {product.stock}</small>
        </div>

        {valueSale && (
          <div className={styles.saleContainer}>
            <h3>ON SALE</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export function Products({ products }) {
  const [nameFilter, setNameFilter] = useState("");

  function handlerOnChange(input) {
    const newValue = input.target.value;
    setNameFilter(newValue);
  }

  let displayProduct = products;

  if (nameFilter.length >= 2) {
    displayProduct = products.filter((product) => {
      const { name, category } = product;
      const lowerFilter = nameFilter.toLowerCase();

      const isSameName = name.toLowerCase().includes(lowerFilter);
      const isSameCategory = category.toLowerCase().includes(lowerFilter);

      return isSameName || isSameCategory;
    });
  }

  return (
    <div>
      <div className={styles.header}>
        <img
          className={styles.logo}
          src="https://1000marcas.net/wp-content/uploads/2021/05/Celine-logo.png"
        ></img>
        <label className={styles.label}>
          Filter by
          <input
            className={styles.input}
            placeholder="insert filter by name or category"
            type="text"
            value={nameFilter}
            onChange={handlerOnChange}
          ></input>
        </label>
      </div>
      {displayProduct.map((product) => (
        <ProductItem key={product.id} product={product}></ProductItem>
      ))}
    </div>
  );
}
