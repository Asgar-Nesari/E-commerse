import React from 'react'

function Cart3({Logo,Title,Message}) {
  return (
    <>
      <div className='flex flex-col  justify-evenly items-center space-y-4 space-x-2 p-10  rounded-2xl hover:scale-105 duration-200 shadow-2xl w-[300px] h-[250px]'>
        <div className='bg-slate-700 rounded-full p-2 text-white'>{Logo}</div>
        <h2 className='font-bold text-2xl'>{Title}</h2>
        <p className='font-semibold'>{Message}</p>
      </div>
    </>
  )
}

export default Cart3
