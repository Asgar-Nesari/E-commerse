import React from 'react'
import { Link } from "react-router-dom";
function Login() {
  return (
    <>
      <div className="flex justify-around mx-20 my-10">
        <div>
          <img
          className='h-[400px] w-[400px] my-10'
            src="https://img.freepik.com/free-vector/shopping-cart-with-bags-gifts-concept-illustration_114360-18775.jpg"
            alt=""
          />
        </div>
        <div className="mt-30">
          <form className="flex flex-col space-y-5 " action='/'>
            <h1 className="text-2xl font-bold">Log in to Exclusive</h1>
            <p className="font-semibold">Enter your details below</p>
        
            <input
              type="email"
              placeholder="Email or Phone Number"
              className="border-b-slate-500 shadow-2xl px-3 py-2 w-full rounded-2xl hover:scale-105 duration-200"
              required
            />
            <input
              type="password"
              placeholder="password"
              className=" border-b-slate-500  shadow-2xl px-3 py-2 w-full rounded-2xl hover:scale-105 duration-200"
              required
            />
            <div className='flex space-x-3'>
            <button
              type="submit"
              className="bg-red-500 shadow-2xl px-3 py-2 w-[100px] rounded-2xl hover:bg-red-800 hover:text-white hover:scale-105 duration-200 cursor-pointer font-semibold"
            >
              Log In
            </button>
            
            <p className='text-red-500 cursor-pointer'>
              Forget Password?
            </p>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
