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
  const [productModalOpened, setProductModalOpened] = useState(false);

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
        {currentProduct && productModalOpened ? (
          <ProductModal
            product={currentProduct}
            setModalOpen={setProductModalOpened}
          />
        ) : null}
        <Header />
        <main>
          <Searchbar />
          <AddProductButton onClick={() => setAddPopupOpened(true)} />
          <ProductGrid
            setCurrentProduct={setCurrentProduct}
            setProductModalOpened={setProductModalOpened}
            products={products}
          />
        </main>
      </div>
    </>
  );
}
