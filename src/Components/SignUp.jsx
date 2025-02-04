import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <>
      <div className="flex justify-around mx-20 my-20">
        <div>
          <img
          className="h-[400px] w-[400px] my-20"
            src="https://img.freepik.com/free-vector/shopping-cart-with-bags-gifts-concept-illustration_114360-18775.jpg"
            alt=""
          />
        </div>
        <div className="mt-10">
          <form className="flex flex-col space-y-5 ">
            <h1 className="text-2xl font-bold">Create an account</h1>
            <p className="font-semibold">Enter your details below</p>
            <input
              type="text"
              placeholder="Name"
              className="border-b-slate-500 shadow-2xl px-3 py-2 w-full rounded-2xl hover:scale-105 duration-200"
              required
            />
            <input
              type="email"
              placeholder="email"
              className="border-b-slate-500 shadow-2xl px-3 py-2 w-full rounded-2xl hover:scale-105 duration-200"
              required
            />
            <input
              type="password"
              placeholder="password"
              className=" border-b-slate-500  shadow-2xl px-3 py-2 w-full rounded-2xl hover:scale-105 duration-200"
              required
            />
            <button
              type="submit"
              className="bg-red-500 shadow-2xl px-3 py-2 w-full rounded-2xl hover:bg-red-800 hover:text-white hover:scale-105 duration-200 cursor-pointer"
            >
              Create Account
            </button>
            <div className="flex space-x-2 border-b-white rounded-2xl hover:scale-105 duration-200 cursor-pointer p-2 shadow-2xl">
              <FcGoogle size={30} />
              <p>Sign up with Google</p>
            </div>
            <p>
              Already have account?
              <button>
              <Link to="/login" className="text-blue-500 ml-2 font-semibold cursor-pointer ">
                Login
              </Link>
              </button>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
