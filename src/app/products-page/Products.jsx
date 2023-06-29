"use client";
import { useState } from "react";
import { imageUrl } from "./Image";
import styles from "../products.module.css";

export function ProductItem({ product }) {
  const biggerThanTenGrand = product.price > 10000;
  const [valueSale, setOnSale] = useState(product.onSale);

  const onChangeSettingSale = () => {
    setOnSale(!valueSale);
  };

  return (
    <div>
      <div className={styles.imgContainer}>
        <img className={styles.img1} src={product.imageUrl}></img>
        <div className={styles.info}>
          <div className={styles.mainContainer}>
            <h1>{product.name}</h1>
          </div>
          <small>{product.category}</small>
          <small
            onChange={onChangeSettingSale}
            style={{ color: !valueSale ? "red" : "black" }}
          >
            {product.price}
          </small>

          <small>amount: {product.amount}</small>
        </div>
        <div className={styles.saleContainer}>
          <h3>ON SALE</h3>
        </div>
      </div>
    </div>
  );
}

export function Products({ products }) {
  const [filter, setFilter] = useState();
  return (
    <div>
      <div className={styles.header}>
        <img
          className={styles.logo}
          src="https://1000marcas.net/wp-content/uploads/2021/05/Celine-logo.png"
        ></img>
      </div>
      {products.map((product) => (
        <ProductItem key={product.id} product={product}></ProductItem>
      ))}
    </div>
  );
}

// function ProductInfo({ product }) {
//   const showName = product.name;

//   return (
//     <div>
//       <strong>{product.name}</strong>
//     </div>
//   );
// }
