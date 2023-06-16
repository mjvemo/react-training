import ProductList from "@/components/client/products/product-list";
import StoreProvider from "@/components/client/store-provider";
import { getProducts } from "@/lib/datastores/server";
import { Preloader } from "./preloader";
import CreateProductForm from "./create-product-form";

export default async function Page() {
  const products = await getProducts();

  return (
    <div>
      <StoreProvider>
        <Preloader products={products} />
        <ProductList />
        <CreateProductForm />
      </StoreProvider>
    </div>
  );
}
