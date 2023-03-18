export default function DeleteProductPopup({
  product,
  setPopupOpened,
  ...props
}) {
  return (
    <div className="bg-yellow-200" {...props}>
      Delete Product Popup{" "}
      <button onClick={() => setPopupOpened(false)} className="bg-yellow-300">
        Close
      </button>
    </div>
  );
}
