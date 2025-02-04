import React from "react";
import { BiDownArrowAlt } from "react-icons/bi";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";

function NavBar() {
  const navItem = [
    {
      id: 1,
      title: <Link to="/">Home</Link>,
    },
    {
      id: 2,
      title: <Link to="/contact">Contact</Link>,
    },
    {
      id: 3,
      title: <Link to="/about">About</Link>,
    },
    {
      id: 4,
      title: <Link to="/signup">Sign Up</Link>,
    },
  ];
  return (
    <>
      <div className="">
        <div className="flex items-center justify-around bg-slate-900 p-2 text-white">
          <p>
            Summer Sale for All Swim and Free Express Delivery - oFF 50%!{" "}
            <span className="font-bold cursor-pointer ml-2 underline">
              ShopNow
            </span>
          </p>
          <div className="flex space-x-2">
            <p>English </p>
            <BiDownArrowAlt size={20} />
          </div>
        </div>

        {/* Start NavBar */}

        <div className="flex justify-between w-full px-10 py-5 shadow-2xl ">
          <div className="">
            <a className="btn btn-ghost text-xl font-bold">Exclusive</a>
          </div>
          <div>
            <ul className="flex space-x-4">
              {navItem.map((item, index) => (
                <li
                  key={index}
                  className="hover:bg-slate-600 px-3 py-2 hover:scale-105 duration-200 rounded-2xl cursor-pointer hover:text-white font-semibold"
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex space-x-2">
            <input
              className="hover:border-gray-100 px-2 md:w-full py-2 rounded-2xl"
              type="Search"
              placeholder="what are you looking for?"
            />
            <IoSearchSharp size={27} />
            <Link to="/wishlist">
              <FaRegHeart
                size={30}
                className="hover:scale-105 duration-200 hover:bg-slate-500 p-1 rounded-full hover:text-white"
              />
            </Link>
            <Link to="/cart">
            <FaCartArrowDown
                size={30}
                className="hover:scale-105 duration-200 hover:bg-slate-500 p-1 rounded-full hover:text-white"
              />
            </Link>
            <Link to="/account">
            <FaRegCircleUser
                size={30}
                className="hover:scale-105 duration-200 hover:bg-slate-500 p-1 rounded-full hover:text-white"
              />
            </Link>

             
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
