import DeleteProductPopup from "@/sections/DeleteProductPopup";
import { useState } from "react";

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
      <div className="bg-green-50" onClick={onClick} {...props}>
        product card
        <button
          onClick={(e) => {
            setDeletePopupOpened(true);
            e.stopPropagation();
          }}
          className="bg-red-300"
        >
          Delete
        </button>
      </div>
    </>
  );
}
