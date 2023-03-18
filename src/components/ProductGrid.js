import ProductCard from "./ProductCard";

export default function ProductGrid({ products, ...props }) {
  return (
    <div className="bg-orange-400">
      {products?.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          imgSrc={product.img_src}
          score={product.score}
        />
      ))}
    </div>
  );
}
