import DeleteProductPopup from "@/sections/DeleteProductPopup";
import Image from "next/image";
import { useState } from "react";
import { ScoreComponent } from "./ProductComparisonCard";

export default function ProductCard({ product, onClick = null, ...props }) {
  const [deletePopupOpened, setDeletePopupOpened] = useState(false);

  return (
    <>
      {deletePopupOpened ? (
        <DeleteProductPopup
          product={product}
          setPopupOpened={setDeletePopupOpened}
        />
      ) : null}
      <div
        className="w-full rounded-md shadow-md border-2 hover:cursor-pointer hover:opacity-70 transition-opacity"
        onClick={onClick}
        {...props}
      >
        <div className="relative w-full pt-[150%]">
          <Image src={product.img_src} alt="" fill className="object-cover" />
        </div>
        <div className="flex px-3 py-3">
          <div className="w-full mr-2">{product.title}</div>
          <ScoreComponent score={product.score} />
        </div>
        {/* <button
          
          onClick={(e) => {
            setDeletePopupOpened(true);
            e.stopPropagation();
          }}
          className="bg-red-300"
        >
          X
        </button> */}
      </div>
    </>
  );
}
