export default function AddProductButton({ ...props }) {
  return (
    <button
      type="button"
      className="bg-primary text-white font-bold h-10 w-10 rounded-full hover:opacity-70 transition-opacity"
      {...props}
    >
      +
    </button>
  );
}
