import React from "react";

export default function ProductComparableCard(props) {
  const productComparable = props.product;

  return (
    <div className="flex">
      <img src={productComparable.img_url} />
      <div className="flex-col ">
        <h1 className="text-black">{productComparable.title}</h1>
        <p className="text-neutral-500">
          {productComparable.brand} | {productComparable.price}
        </p>
        <p className="text-black">{productComparable.brand}</p>
        <div>
          <p className="text-black">Sustainability Score:</p>
          <ScoreComponent props={productComparable.score} />
        </div>
      </div>
    </div>
  );
}

export function ScoreComponent({ score }) {
  const backgroundColorGenerator = (score) => {
    if (score < 20) {
      return "bg-red";
    } else if (score >= 20 && score < 40) {
      return "bg-maroon";
    } else if (score >= 40 && score < 60) {
      return "bg-yellow";
    } else if (score >= 60 && score < 80) {
      return "bg-lightgreen";
    } else {
      return "bg-green";
    }
  };

  const bgColor = backgroundColorGenerator(score);

  return (
    <div>
      <p className={bgColor}>{score}</p>
    </div>
  );
}
