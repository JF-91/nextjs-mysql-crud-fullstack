"use client";

import React from "react";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useRouter, useParams } from "next/navigation";
const ProductForm = () => {

  //NAVIGATOR
  const router = useRouter();

  //INPUT REFERENCE
  const formRef = useRef();

  //PARAMS ID OF THE CARD
  const params = useParams();
  console.log(params);

  //TODO: POST
  async function POST() {
    const res = await axios.post("/api/products", products);
    console.log(res);
    return res;
  }

  //TODO: PUT
  async function PUT() {
    const res = await axios.put(`/api/products/${params.id}`, products);
    console.log(res);
    return res;
  }


  const [products, setProducts] = useState({
    name: "",
    price: 0,
    description: "",
  });

  const hanleSubmit = (e) => {
    e.preventDefault();

    if (!params.id) {
      POST();
    } else {
      PUT();
    }

    formRef.current.reset();
    router.push("/products");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducts((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //TODO: USE EFECT FOR SEND THE PARAMS TO /products/edit/?
  useEffect(() => {
    if (params.id) {
      axios.get(`/api/products/${params.id}`).then((res) => {
        setProducts({
          name: res.data.name,
          price: res.data.price,
          description: res.data.description,
        });
      });
    }
  }, []);

  return (
    <div>
      <form
        onSubmit={hanleSubmit}
        ref={formRef}
        className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4"
      >
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          {" "}
          Product Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3"
          type="text"
          placeholder="Name"
          name="name"
          autoFocus
          onChange={handleChange}
        
        />

        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Product Price:{" "}
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3"
          type="text"
          name="price"
          placeholder="00.00"
          onChange={handleChange}
        />

        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Product Description
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3"
          name="description"
          rows={3}
          placeholder="Description"
          onChange={handleChange}
        />

        <button className="font-bold bg-red-400 rounded-md p-2 mt-4">
          {params.id ? "Update" : "Create" }
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
