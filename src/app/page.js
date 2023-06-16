import ProductList from "@/components/client/products/product-list";
import StoreProvider from "@/components/client/store-provider";
import styles from "./page.module.css";

export default async function Home() {
  return (
    <main className={styles.main}>
      <StoreProvider>
        <ProductList />
      </StoreProvider>
    </main>
  );
}
