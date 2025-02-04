import React, { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaShippingFast } from "react-icons/fa";
import { MdRestartAlt } from "react-icons/md";
import Cart11 from "../home/Cart11";
import { Link } from "react-router-dom";

function KeyBoard() {
  const Images = [
    {
      id: 1,
      source:
        "https://orisdi.com/cdn/shop/files/Untitleddesign_e43fb174-8fda-4a4f-a6c3-3fb38fc3a16a_300x.jpg?v=1686263447",
    },
    {
      id: 2,
      source:
        "https://www.keyscaps.com/cdn/shop/files/61D6bDHDXAL._SL1000.jpg?v=1714291038",
    },
    {
      id: 3,
      source:
        "https://www.startech.com.bd/image/cache/catalog/keyboard/t-wolf/t17/t17-01-500x500.webp",
    },
    {
      id: 4,
      source:
        "https://www.keyscaps.com/cdn/shop/files/61OQK4kUEYL._SL1000.jpg?v=1714291038",
    },
  ];

  const CartItem1 = [
    {
      id: 21,
      tag: "-50%",
      image:
        "https://m.media-amazon.com/images/I/61LVvVBG3wL.jpg",
      message: "Normal Ladies dress",
      offer: "$577",
      reoffer: "$1130",
      show:<Link to='/halvik'>Shop Now!</Link>
    },
    {
      id: 22,
      tag: "-30%",
      image:
        "https://m.media-amazon.com/images/I/41KgikJdsjL._SX466_.jpg",
      message: "Gucci duffle bag",
      offer: "$769",
      reoffer: "$1130",
      show:<Link to='/halvik'>Shop Now!</Link>
    },
    {
      id: 23,
      tag: "-20%",
      image: "https://4.imimg.com/data4/NJ/EC/MY-8414203/computer-ram-500x500.jpg",
      message: "8 GB RAM",
      offer: "$1222",
      reoffer: "$1500",
      show:<Link to='/halvik'>Shop Now!</Link>
    },
    {
      id: 24,
      tag: "-22%",
      image:
        "https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/492409310/665/492409310-1_7221.webp",
      message: "Tool set Briefcase",
      offer: "$890",
      reoffer: "$1110",
      show:<Link to='/halvik'>Shop Now!</Link>
    },
  ];

  const [item, setItem] = useState(0);
  return (
    <>
      <div className="m-20">
        <div className="flex flex-row space-x-4  w-full">
          <div className="flex flex-col space-y-2 w-[40%]">
            {Images.map(({ id, source }) => (
              <img
                key={id}
                src={source}
                alt=""
                className="w-[150px] h-[150px]  shadow-2xl rounded-xl hover:scale-105 duration-200"
              />
            ))}
          </div>
          <div className="flex justify-center items-center  w-full">
            <img
              className="w[400px] h-[400px]"
              src="https://tech.priyo.com/wp-content/uploads/2023/01/ak-900-01-500x500-1.jpg"
              alt=""
            />
          </div>
          <div className=" w-full space-y-2">
            <h1 className="font-bold">Ak-900 Wired keyboard </h1>
            <div className="flex space-x-2">
              <FaRegStar size={20} color="yellow" />
              <FaRegStar size={20} color="yellow" />
              <FaRegStar size={20} color="yellow" />
              <FaRegStar size={20} color="gray" />
              <FaRegStar size={20} color="gray" />
              <p className="text-gray-500">(110 Reviews)</p>
              <p>|</p>
              <span className="text-green-400">In stack</span>
            </div>
            <h2 className="text-xl">$1110.00</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              ullam magni maxime culpa dolor ab non, repudiandae excepturi quod
              distinctio iste obcaecati modi nesciunt eos eius amet! Voluptas,
              odit omnis.
            </p>
            <hr />
            <div className="flex items-center space-x-3">
              <h3 className="font-semibold text-xl">Colours:</h3>
              <div className="border-2 w-[20px] h-[20px] bg-slate-400 rounded-full"></div>
              <div className="border-2 w-[20px] h-[20px] bg-red-400 rounded-full"></div>
            </div>

            <div className="flex justify-between w-full h-[50px]">
              <div className=" flex items-center space-x-2 ">
                <p
                  className=" px-4 py-2 bg-green-700 cursor-pointer rounded-xl text-white"
                  onClick={() => setItem(item - 1)}
                >
                  -
                </p>
                <p className=" px-4 py-2 border rounded-xl">{item}</p>
                <p
                  className="  bg-red-700 px-4 py-2 text-white rounded-xl cursor-pointer"
                  onClick={() => setItem(item + 1)}
                >
                  +
                </p>
              </div>
              <div className="bg-red-600 p-2 rounded-xl text-white">
                <button>Buy Now</button>
              </div>
              <div className="border px-2 py-3 rounded-md">
                <IoIosHeartEmpty size={20} />
              </div>
            </div>

            <div className="border p-3 w-[70%] mt-2 rounded-2xl">
              <div className="flex space-x-2 my-2">
                <div>
                  <FaShippingFast size={25} />
                </div>
                <div className="">
                  <p>Free Delivery</p>
                  <p className="underline">
                    Enter your postal code for Delivery Avaliability
                  </p>
                </div>
              </div>
              <hr />
              <div className="flex space-x-2 my-2">
                <MdRestartAlt size={30} />
                <div>
                  <p>Return Delivery</p>
                  <p>
                    Free 30 Days Delivery Returns .
                    <span className="underline">Details</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-red-500 font-semibold">Related Items</p>
        </div>

        <div className="flex justify-between">
          {
            CartItem1.map(({id,tag,image,message,offer,reoffer,show})=>(
              <Cart11
                  key={id}
                  Tag={tag}
                  Image={image}
                  Message={message}
                  Offer={offer}
                  Reoffer={reoffer}
                  Show={show}
                />
            ))
          }
        </div>
      </div>
    </>
  );
}

export default KeyBoard;
