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
    <div>
      <div className="grid grid-cols-2">
        <div className="w-full h-min-40 relative">
          <Image
            src={mainProduct.img_src}
            alt=""
            className="object-contain"
            fill
          />
        </div>
        <div className="flex-col">
          {comparables.map((comparable) => (
            <ProductComparisonCard key={comparable.id} product={comparable} />
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
  );
}
