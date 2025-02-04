import React from 'react'

function Cart() {
  return (
    <>
      <div className='flex flex-col px-40 py-20 space-y-6'> 
        <div className='flex space-x-2'>
          <p className='text-slate-600'>Home / </p>
          <p>Cart</p>
        </div>

        <div className='flex shadow-xl rounded-2xl border-gray-400 justify-between p-2 '>
          <h2 className='ml-4'>Product</h2>
          <h3>Price</h3>
          <h3>Quality</h3>
          <h3>Subtotal</h3>
        </div>

        <div className='flex justify-between items-center border-gray-300 shadow-2xl rounded-xl px-2 hover:scale-105 duration-200 '>
          <div className='flex items-center space-x-2'>
            <img className='h-[50px] w-[50px] rounded-full' src="https://thumbs.dreamstime.com/b/no-laptop-prohibition-sign-isolated-over-white-no-laptop-prohibition-sign-isolated-over-white-vector-illustration-337747390.jpg"  alt="" />
            <p>HD screen Laptop.</p>
          </div>
          <h2>$650</h2>
          <input type="number" className='w-[100px] px-3 py-2 rounded-2xl' placeholder='01'/>
          <h2>$650</h2>
        </div>

        <div className='flex justify-between items-center border-gray-300 shadow-2xl rounded-xl px-2 hover:scale-105 duration-200 '>
          <div className='flex items-center space-x-2'>
            <img className='h-[50px] w-[50px] rounded-full' src="https://png.pngtree.com/png-clipart/20230925/original/pngtree-prohibition-of-gaming-joystick-icon-displayed-on-no-game-sign-vector-png-image_12756525.png"  alt="" />
            <p>Hi Gampepad</p>
          </div>
          <h2>$550</h2>
          <input type="number" className='w-[100px] px-3 py-2 rounded-2xl' placeholder='02'/>
          <h2>$1110</h2>
        </div>

        <div className='flex justify-between mt-2'>
          <button className='px-2 py-3 border-1 rounded-2xl hover:bg-slate-500 cursor-pointer hover:scale-105 duration-200 hover:text-white'>Return To Shop</button>
          <button className='px-2 py-3 border-1 rounded-2xl hover:bg-slate-500 cursor-pointer hover:scale-105 duration-200 hover:text-white'>update cart</button>
        </div>

        <div className='flex justify-between'>
          <div className='flex space-x-2 w-[40%] h-[20%]'>
            <input className='p-2 border-2 rounded-xl border-gray-600' type="text" placeholder='Coupon Code'/>
            <button className='px-3 py-2 bg-red-500 text-white cursor-pointer rounded-xl hover:scale-105 duration-300'>Apply Coupon</button>
          </div>
          <div className='w-[30%] border-2 p-4 rounded-2xl space-y-3'>
            <h1 className='font-bold'>Cart Total</h1>
            <div className='flex justify-between'>
              <p>Subtotal:</p>
              <p>$1750</p>
            </div>
            <hr />
            <div className='flex justify-between'>
              <p>Shipping:</p>
              <p>Free</p>
            </div>
            <hr />
            <div className='flex justify-between'>
              <p>Total:</p>
              <p>$1750</p>
            </div>
            <button className='px-3 py-2 bg-red-500 text-white cursor-pointer rounded-xl hover:scale-105 duration-300'>Process to checkout</button>
            
          </div>
        </div>

      </div>
    </>
  )
}

export default Cart
