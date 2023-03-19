import AddProductButton from "@/components/AddProductButton";
import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import Searchbar from "@/components/Searchbar";
import { dummyProducts } from "@/constants/dummy";
import AddProductPopup from "@/sections/AddProductPopup";
import ProductModal from "@/sections/ProductModal";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";

export default function Dashboard() {
  const [currentProduct, setCurrentProduct] = useState(null); // product object
  const [addPopupOpened, setAddPopupOpened] = useState(false);
  const { data: session, loading } = useSession();
  const router = useRouter();

  const products = dummyProducts; // change to fetch

  useEffect(() => {
    if (!loading && !session) {
      router.push("/login");
    }
  }, [router, loading, session]);

  if (loading || !session) return <div>Loading...</div>;
  return (
    <>
      <Head>
        <title>Ethiclo | Dashboard</title>
      </Head>
      {addPopupOpened ? (
        <AddProductPopup setPopupOpened={setAddPopupOpened} />
      ) : null}
      {currentProduct ? (
        <ProductModal
          product={currentProduct}
          setCurrentProduct={setCurrentProduct}
        />
      ) : null}
      <div
        className={
          currentProduct || addPopupOpened ? "overflow-hidden h-screen" : ""
        }
      >
        <Header />
        <main className="px-4 py-4">
          <div className="flex justify-between mb-4">
            <Searchbar className="mr-8" />
            <div>
              <AddProductButton onClick={() => setAddPopupOpened(true)} />
            </div>
          </div>
          <ProductGrid
            setCurrentProduct={setCurrentProduct}
            products={products}
          />
        </main>
      </div>
    </>
  );
}
