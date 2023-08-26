"use client";
import axios from "axios";
import React from "react";
import { useRouter } from "next/navigation";


const Buttons = ({ productId }) => {
    const router = useRouter()

    const clickEvent = async(e)=>{
        console.log(e);
        if(confirm('arre you sure?')){
         const res =  await axios.delete(`/api/products/${productId}`)
           if (res.status === 204){
            router.push('/products')
           }

           
        }
   
    }

    const update = async(e)=>{
        console.log(e);
        router.push(`http://localhost:3000/products/edit/${productId}`)
   
    }

  return (
    <div>
      <div className="flex gap-2 justify-end  mt-2">
        <button
          className="text-white bg-red-500 hover:bg-red-700 py-2 px3 rounded"
          onClick={clickEvent}
        >
          delete
        </button>
        <button
          className="text-white  bg-blue-500 hover:bg-blue-700 py-2 px3 rounded"
          onClick={update}
        >
          edit
        </button>
      </div>
    </div>
  );
};

export default Buttons;
