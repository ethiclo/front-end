import ProductCard from "./ProductCard";

export default function ProductGrid({ products, setCurrentProduct, ...props }) {
  return (
    <div
      className="grid w-full grid-cols-2 justify-center gap-4 sm:grid-cols-[repeat(auto-fit,260px)]"
      {...props}
    >
      {products ? (
        products?.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => setCurrentProduct(product)}
          />
        ))
      ) : (
        <div>No saved products!</div>
      )}
    </div>
  );
}
