import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";

function W_Cart({Source,PriceTag}) {
  
  return (
    <>
      <div className="flex flex-col space-y-2 border-2 border-gray-300 p-2 rounded-xl shadow-2xl hover:scale-105 duration-200 cursor-pointer w-[20%]">
      <div>
        <div className="flex justify-between">
          <p className="bg-red-600 p-2 text-white cursor-pointer hover:scale-105 duration-200 rounded-xl">
            {PriceTag}
          </p>
          <MdDeleteForever size={30} />
        </div>
        <img
          className="w-[200px] h-[200px] ml-5"
          src={Source}
          alt=""
        />

        <div className="bg-gray-950 text-white w-full p-2 hover:bg-slate-700 cursor-pointer rounded-xl flex items-center justify-center space-x-2">
          <FaCartPlus />
          <p className="">Add to Cart</p>
        </div>
      </div>

      <div>
        <h3>Gucci duffle bag</h3>
        <p className="text-red-700">$960 <span className="text-gray-500 line-through">$1160</span></p>
        
      </div>
      </div>
    </>
  );
}

export default W_Cart;
