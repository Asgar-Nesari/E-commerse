import React from 'react'
import { FiTwitter } from "react-icons/fi";
import { TbBrandLinkedin } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";


function Cart2({Image,Title,Message}) {
  return (
    <>
      <div className='flex flex-col space-y-3 rounded-3xl p-3 shadow-2xl hover:scale-105 duration-200 cursor-pointer'>
        <img className='w-[300px] h-[300px]' src={Image} alt="" />
        <h1 className='font-bold text-xl'>{Title}</h1>
        <p>{Message}</p>
        <div className='flex space-x-2'>
          <FiTwitter size={20}/>
          <TbBrandLinkedin size={20}/>
          <FaInstagram size={20}/>
        </div>
      </div>
    </>
  )
}

export default Cart2
