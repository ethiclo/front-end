export default function AddProductPopup({ setPopupOpened, ...props }) {
  return (
    <div className="bg-purple-200" {...props}>
      Add Product Popup
      <button onClick={() => setPopupOpened(false)} className="bg-blue-300">
        Close
      </button>
    </div>
  );
}
