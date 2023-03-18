import AddProductButton from "@/components/AddProductButton";
import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import Searchbar from "@/components/Searchbar";
import { dummyProducts } from "@/constants/dummy";
import Head from "next/head";

export default function Dashboard() {
  const products = dummyProducts;

  return (
    <>
      <Head>
        <title>Ethiclo | Dashboard</title>
      </Head>
      <div>
        <Header />
        <main>
          <Searchbar />
          <AddProductButton />
          <ProductGrid products={products} />
        </main>
      </div>
    </>
  );
}
