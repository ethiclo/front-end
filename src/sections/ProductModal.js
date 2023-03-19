import ProductComparisonCard, {
  ScoreComponent,
} from "@/components/ProductComparisonCard";
import { dummyProducts } from "@/constants/dummy";
import Image from "next/image";
import React from "react";
import { useEffect } from "react/cjs/react.production.min";

export default function ProductModal(props) {
  const setCurrentProduct = props.setCurrentProduct;
  const mainProduct = props.product;
  const comparables = dummyProducts;

  // useEffect (() => {
  //   async function getData() {
  //     const payload = {email: sessionStorage.user.email}
  //     const resp = await fetch(
  //       "http://localhost:3000/get_sustainable_products",  

  //   }
  //   if (!data && !error && !loading) {
  //     getData()
  //   }
  // })

  function closeModal() {
    setCurrentProduct(null);
  }

  return (
    <div
      className="fixed bg-black-transparent z-50 left-0 top-0 w-full h-screen flex justify-end items-start"
      onClick={closeModal}
    >
      <div
        className="bg-white h-full overflow-auto w-full md:w-2/3"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid gap-2 grid-cols-1 md:grid-cols-[minmax(0,2fr),minmax(0,3fr)] md:h-full">
          <div className="px-4 md:px-0 md:overflow-auto md:border-r-2">
            <div className="h-0 pt-[150%] w-full relative">
              <Image
                src={mainProduct.img_src}
                alt=""
                className="object-cover"
                fill
              />
            </div>
            <div className="px-4">
              <h1 className="text-2xl text-black mb-2 pt-5 font-bold pb-1">
                {mainProduct.title}
              </h1>
              <h1 className="text-xl ml-1 pb-2 text-gray-400">
                {mainProduct.brand} | {mainProduct.price}
              </h1>
              <p className="ml-1 mb-4">{mainProduct.description}</p>
              <div className="flex mb-4">
                <p className="mr-3 font-bold">Sustainability Score:</p>
                <ScoreComponent score={mainProduct.score} />
              </div>
            </div>
          </div>
          <div className="flex-col md:h-full md:overflow-auto px-4 py-8 border-t-2 md:border-t-0">
            <h1 className="text-3xl text-black text-center mb-8">
              More Sustainable Options...
            </h1>
            {comparables.map((comparable) => (
              <ProductComparisonCard
                key={comparable.id}
                product={comparable}
                main={mainProduct}
              />
            ))}
          </div>
        </div>
        <div>
          <button
            className="font-bold h-8 w-8 rounded-full absolute bg-gray-300 text-white right-2 top-2 hover:opacity-70 transition-opacity"
            onClick={closeModal}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
}
