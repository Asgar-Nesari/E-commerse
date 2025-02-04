import React from 'react'
import { FaHome } from "react-icons/fa";

function Cart1({Icon,Title,Msg}) {
  return (
    <>
      <div className='flex flex-col  justify-between items-center space-y-4 space-x-2 p-10  rounded-2xl hover:scale-105 duration-200 shadow-2xl'>
        {Icon}
        <h1 className='font-bold text-2xl'>{Title}</h1>
        <p className='font-semibold'>{Msg}</p>
      </div>
    </>
  )
}

export default Cart1
