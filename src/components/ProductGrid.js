import ProductCard from "./ProductCard";

export default function ProductGrid({
  products,
  setCurrentProduct,
  setProductModalOpened,
  ...props
}) {
  return (
    <div className="bg-orange-400" {...props}>
      {products?.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onClick={() => {
            setCurrentProduct(product);
            setProductModalOpened(true);
          }}
        />
      ))}
    </div>
  );
}
