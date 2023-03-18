import AddProductButton from "@/components/AddProductButton";
import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import Searchbar from "@/components/Searchbar";
import { dummyProducts } from "@/constants/dummy";
import AddProductPopup from "@/sections/AddProductPopup";
import ProductModal from "@/sections/ProductModal";
import Head from "next/head";
import { useState } from "react";

export default function Dashboard() {
  const [currentProduct, setCurrentProduct] = useState(null); // product object
  const [addPopupOpened, setAddPopupOpened] = useState(false);

  const products = dummyProducts; // change to fetch

  return (
    <>
      <Head>
        <title>Ethiclo | Dashboard</title>
      </Head>
      <div>
        {addPopupOpened ? (
          <AddProductPopup setPopupOpened={setAddPopupOpened} />
        ) : null}
        {currentProduct ? (
          <ProductModal
            product={currentProduct}
            setCurrentProduct={setCurrentProduct}
          />
        ) : null}
        <Header />
        <main>
          <Searchbar />
          <AddProductButton onClick={() => setAddPopupOpened(true)} />
          <ProductGrid
            setCurrentProduct={setCurrentProduct}
            products={products}
          />
        </main>
      </div>
    </>
  );
}
