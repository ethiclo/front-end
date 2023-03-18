export default function DeleteProductPopup({
  product,
  setPopupOpened,
  ...props
}) {
  return (
    <div
      className="h-full w-full flex flex-col absolute left-0 top-0 justify-center items-center bg-black-transparent rounded-md z-10 px-4 text-white"
      {...props}
    >
      <div className="mb-4 text-center">
        Are you sure you want to delete this from your saved products?
      </div>
      <button className="bg-red-600 text-white font-bold px-4 py-2 rounded-md hover:bg-red-800 transition-colors">
        Delete
      </button>
      <button
        onClick={() => setPopupOpened(false)}
        className="font-bold absolute top-2 right-2 hover:opacity-70 transition-opacity"
      >
        X
      </button>
    </div>
  );
}
