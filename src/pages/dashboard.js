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
import Loading from "@/components/Loading";
import ErrorMessage from "@/components/ErrorMessage";

export default function Dashboard() {
  const [currentProduct, setCurrentProduct] = useState(null); // product object
  const [addPopupOpened, setAddPopupOpened] = useState(false);
  const { data: session, loading } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !session) {
      router.push("/login");
    }
  }, [router, loading, session]);

  const [products, setProducts] = useState([]); // change to fetch
  const [fetchState, setFetchState] = useState("init");
  const [error, setError] = useState("");
  useEffect(() => {
    async function getData() {
      setFetchState("loading");

      const endpoint = "http://localhost:3000/get_my_products";
      // const endpoint = "https://api.swimbyshea.com/";
      const payload = { email: session?.user?.email };
      const resp = await fetch(endpoint, {
        body: JSON.stringify(payload),
        method: "POST",
      });

      if (!resp.ok) {
        setError("An error has occured. Please try again later.");
        setFetchState("complete");
        return;
      }

      const json = await resp.json();
      setProducts(json);
      setFetchState("complete");
    }

    if (fetchState == "init" && !loading) {
      getData();
    }
  }, [fetchState, loading, session?.user?.email]);

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
          {fetchState == "init" || fetchState == "loading" ? (
            <Loading />
          ) : error ? (
            <ErrorMessage message={error} />
          ) : (
            <>
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
            </>
          )}
        </main>
      </div>
    </>
  );
}
