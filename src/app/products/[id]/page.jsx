import axios from "axios";

import React from "react";
import Buttons from "./Buttons";

async function loadProduct(productId) {
  const { data } = await axios.get(
    `http://localhost:3000/api/products/${productId}`
  );

  return data;
}

const IdProductPage = async ({ params }) => {
  console.log(params);
  const { product } = await loadProduct(params.id);
  console.log(product);
  return (
    <div className="bg-white p-6 flex justify-center imtes-center">
      {product.map((z) => (
        <div key={z.id}>
          <h3>{z.name}</h3>
          <span>{z.price}</span>
          <p>{z.description}</p>
          <Buttons productId={z.id}/>
        </div>
      ))}
    </div>
  );
};

export default IdProductPage;
