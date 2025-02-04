import React from 'react';
import { FaRegHeart } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

function Cart11({Tag,Image,Message,Offer,Reoffer,Show}) {
  return (
    <div className='flex flex-col space-y-2 rounded-2xl w-[20%] h-[30%] p-3 shadow-2xl hover:scale-105 duration-200 cursor-pointer' >
      <div className='flex justify-between'>
        <p className='bg-red-500 p-2 text-white rounded-xl'>{Tag}</p>
        <FaRegHeart size={25}/>
      </div>
      <div className='flex'>
        <div>
          <img src={Image} className='w-[200px] h-[200px]' alt="" />
        </div>
        <FaRegEye size={30}/>
      </div>
      <h2 className='font-semibold'>{Message}</h2>
      <div className='flex space-x-2'>
      <p className='text-red-700'>{Offer}</p>
      <p className='text-slate-600 line-through'>{Reoffer}</p>
      </div>

      <div className='flex space-x-2'>
        <CiStar color='yellow'/>
        <CiStar color='yellow'/>
        <CiStar color='yellow'/>
        <CiStar color='yellow'/>
        <CiStar color='yellow'/>
        <p>(85)</p>
      </div>

      <div className='bg-green-500 text-white px-3 py-2  cursor-pointer w-[50%] rounded-2xl'>{Show}</div>

      
    </div>
  )
}

export default Cart11
