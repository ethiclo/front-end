import ProductComparisonCard from "@/components/ProductComparisonCard";
import { dummyProducts } from "@/constants/dummy";
import Image from "next/image";
import React from "react";

export default function ProductModal(props) {
  const setCurrentProduct = props.setCurrentProduct;
  const mainProduct = props.product;
  const comparables = dummyProducts;

  function closeModal() {
    setCurrentProduct(null);
  }

  return (
    <div
      className="fixed bg-black-transparent z-50 left-0 top-0 w-full h-screen flex justify-end items-start"
      onClick={closeModal}
    >
      <div className="bg-white h-full w-full md:w-3/4" onClick={(e) => e.stopPropagation()}>
        <div className="grid grid-cols-2 h-full">
          <div className="w-full h-80 relative">
            <Image
              src={mainProduct.img_src}
              alt=""
                className="h-half-screen-height w-40"
                fill
            />
          </div>
          <div className="flex-col h-full overflow-auto mb-2">
            <h1 className="text-3xl text-black mb-2 text-center p-5">More Sustainable Options...</h1>
            {comparables.map((comparable) => (
              <ProductComparisonCard key={comparable.id} product={comparable} main={mainProduct} />
            ))}
          </div>
        </div>
        <div>
          <button
            className="rounded-none bg-sky-500 hover:bg-sky-700"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
