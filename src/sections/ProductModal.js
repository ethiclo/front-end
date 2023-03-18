import ProductComparisonCard from "@/components/ProductComparisonCard";
import { dummyProducts } from "@/constants/dummy";
import React, { useState } from "react";

export default function ProductModal(props) {
  const setModalOpened = props.setModalOpen;
  const mainProduct = props.product;
  const comparables = dummyProducts;

  function closeModal() {
    setModalOpened(false);
  }

  return (
    <div>
      <div className="flex">
        <img src={mainProduct.img_url}></img>
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
