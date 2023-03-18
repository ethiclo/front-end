import DeleteProductPopup from "@/sections/DeleteProductPopup";
import Image from "next/image";
import { useState } from "react";
import { ScoreComponent } from "./ProductComparisonCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function ProductCard({ product, onClick = null, ...props }) {
  const [deletePopupOpened, setDeletePopupOpened] = useState(false);

  const handleClick = () => {
    if (!deletePopupOpened) {
      onClick();
    }
  };

  return (
    <div
      className="w-full group rounded-md shadow-md border-2 relative"
      onClick={handleClick}
      {...props}
    >
      {deletePopupOpened ? (
        <DeleteProductPopup
          product={product}
          setPopupOpened={setDeletePopupOpened}
        />
      ) : null}
      <div
        className={
          "relative w-full h-0 pt-[150%] transition-opacity" +
          (!deletePopupOpened
            ? " group-hover:cursor-pointer group-hover:opacity-70"
            : "")
        }
      >
        <Image src={product.img_src} alt="" fill className="object-cover" />
      </div>
      <button
        onClick={(e) => {
          setDeletePopupOpened(true);
          e.stopPropagation();
        }}
        className={
          "absolute top-2 text-lg right-2 opacity-50 transition-[opacity,color]" +
          (!deletePopupOpened
            ? " hover:text-red-600 group-hover:cursor-pointer group-hover:opacity-30 group-hover:hover:opacity-100"
            : "")
        }
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
      <div
        className={
          "flex px-3 py-3 transition-opacity" +
          (!deletePopupOpened
            ? " group-hover:cursor-pointer group-hover:opacity-70"
            : "")
        }
      >
        <div className="w-full mr-2">{product.title}</div>
        <ScoreComponent score={product.score} />
      </div>
    </div>
  );
}
