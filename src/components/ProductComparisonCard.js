import React from "react";
import Image from "next/image";

export default function ProductComparableCard(props) {
  const productComparable = props.product;

  return (
    <a target="_blank" href={productComparable.url} className="h-full">
    <div className="flex border-2 rounded-lg mb-3 h-40 shadow-md items-center ml-3 mr-3" >
        
            <div className="ml-2 mr-2 h-full relative w-28">
                <Image src={productComparable.img_src} fill className="object-cover" />
            </div>
      <div className="flex-col w-full">
        <h1 className="text-black font-bold">{productComparable.title}</h1>
        <p className="text-neutral-500 text-base">
          {productComparable.brand} | {productComparable.price}
        </p>
        <p className="text-black">{productComparable.brand}</p>
        <div className="flex">
          <p className="text-black mr-4">Sustainability Score:</p>
          <ScoreComponent score={productComparable.score} />
        </div>
      </div>
      
    </div>
    </a>
  );
}

export function ScoreComponent({ score }) {
  const backgroundColorGenerator = (score) => {
    if (score < 20) {
      return "bg-red-700 rounded-md w-10 text-center text-white";
    } else if (score >= 20 && score < 40) {
      return "bg-red-500 rounded-md w-10 text-center text-white";
    } else if (score >= 40 && score < 60) {
      return "bg-amber-300 rounded-md w-10 text-center text-white";
    } else if (score >= 60 && score < 80) {
      return "bg-orange-500 rounded-md w-10 text-center text-white";
    } else {
      return "bg-green-600 rounded-md w-10 text-center text-white";
    }
  };

  const bgColor = backgroundColorGenerator(score);

  return (
    <div>
      <p className={bgColor}>{score}</p>
    </div>
  );
}
