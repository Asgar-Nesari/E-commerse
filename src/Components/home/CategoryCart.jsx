import React from 'react'

function CategoryCart({Icon,Message}) {
  return (
    <>
      <div className='flex flex-col items-center justify-between w-[10%] h-[50%] shadow-2xl p-4 space-y-3 rounded-xl hover:scale-105 duration-200 cursor-pointer'>
        <h1>{Icon}</h1>
        <p>{Message}</p>
      </div>
    </>
  )
}

export default CategoryCart
