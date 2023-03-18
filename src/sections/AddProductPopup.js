export default function AddProductPopup({ setPopupOpened, ...props }) {
  return (
    <div
      className="bg-black-transparent fixed z-50 top-0 left-0 w-full h-full flex justify-center items-center px-4"
      {...props}
      onClick={() => setPopupOpened(false)}
    >
      <div
        className="bg-white rounded-md max-w-screen-sm w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <form className="px-4 py-8 flex flex-col">
          <h2 className="mb-6 mx-auto text-center text-2xl font-bold">
            Save New Product
          </h2>
          <label className="mb-1">Product URL</label>
          <input
            type="text"
            placeholder="https://example.com/product"
            className="bg-white w-full outline-none border-2 rounded-md px-2 py-2 mb-6"
          />
          <button
            type="submit"
            className="bg-primary px-4 py-2 rounded-md font-bold text-white transition-colors hover:bg-primary-dark"
          >
            Submit
          </button>
        </form>
        <button
          onClick={() => setPopupOpened(false)}
          className="font-bold absolute top-2 right-2 hover:opacity-70 transition-opacity text-white"
        >
          X
        </button>
      </div>
    </div>
  );
}
