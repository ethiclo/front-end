export default function Searchbar({ className = "", ...props }) {
  return (
    <div
      className={
        "px-2 py-2 w-full hover:border-gray-300 hover:focus-within:border-primary border-b-2 text-lg focus-within:border-primary transition-colors " +
        className
      }
      {...props}
    >
      <input
        type="text"
        placeholder="Search saved products..."
        className="bg-transparent w-full outline-none"
      />
    </div>
  );
}
