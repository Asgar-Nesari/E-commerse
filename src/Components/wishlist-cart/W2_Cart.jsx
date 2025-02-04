import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { CiStar } from "react-icons/ci";

function W2_Cart({ Source }) {
  const notify = () => toast("Add to cart Successfully..");
  return (
    <>
      <div className="flex flex-col space-y-2 border-2 border-gray-300 p-2 rounded-xl shadow-2xl hover:scale-105 duration-200 cursor-pointer w-[20%]">
        <div>
          <div className="flex justify-between">
            <p className="bg-red-600 p-2 text-white cursor-pointer hover:scale-105 duration-200 rounded-xl">
              -35%
            </p>
            <MdOutlineRemoveRedEye size={30} />
          </div>
          <img className="w-[200px] h-[200px] ml-5" src={Source} alt="" />

          <div className="bg-gray-950 text-white w-full p-2 hover:bg-slate-700 cursor-pointer rounded-xl flex items-center justify-center space-x-2">
            <FaCartPlus />
            <button>Add to Cart</button>
          </div>
        </div>

        <div>
          <h3>Gucci duffle bag</h3>
          <p className="text-red-700">$960</p>
          <div className="flex">
            <CiStar size={20} color="yellow" />
            <CiStar size={20} color="yellow" />
            <CiStar size={20} color="yellow" />
            <CiStar size={20} color="yellow" />
            <CiStar size={20} color="yellow" />
            <p>(85)</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default W2_Cart;
