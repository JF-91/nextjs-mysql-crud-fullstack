import Link from "next/link";
import React from "react";

const ProductCard = ({product}) => {
  return (
 
      <Link
        className="hover:cursor-pointer p-4 bg-white rounded-lg border-gray-800 mb-3"
        key={product.id}
        href={`/products/${product.id}`}
      >
        <h3 className="text-lg">{product.name}</h3>
        <p>{product.description}</p>
      </Link>
    
  );
};

export default ProductCard;
