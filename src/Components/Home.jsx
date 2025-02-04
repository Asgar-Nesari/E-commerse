import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Cart11 from "./home/Cart11";
import CategoryCart from "./home/CategoryCart";

import { CiMobile1 } from "react-icons/ci";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { IoCameraReverseOutline } from "react-icons/io5";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { SiYoutubegaming } from "react-icons/si";
import { Link } from "react-router-dom";

function Home() {
  const CartItem1 = [
    {
      id: 1,
      tag: "-50%",
      image:
        "https://cdn3d.iconscout.com/3d/premium/thumb/joystick-3d-icon-download-in-png-blend-fbx-gltf-file-formats--game-controller-gamepad-console-gaming-tool-pack-video-games-icons-7869746.png?f=webp",
      message: 'Halvik',
      offer: "$1120",
      reoffer: "$1230",
      show:<Link to='/halvik'>Shop Now!</Link>
    },
    {
      id: 2,
      tag: "-30%",
      image:
        "https://tech.priyo.com/wp-content/uploads/2023/01/ak-900-01-500x500-1.jpg",
      message: "AK-900 Wired Keyboard",
      offer: "$769",
      reoffer: "$1030",
      show:<Link to='/keyboard'>Shop Now!</Link>
    },
    {
      id: 3,
      tag: "-20%",
      image: "https://m.media-amazon.com/images/I/71vALVGjx+L.jpg",
      message: "IPS LCD Gaming Monitor",
      offer: "$235",
      reoffer: "$500",
      show:<Link to='/gamingmonitor'>Shop Now!</Link>
    },
    {
      id: 4,
      tag: "-22%",
      image:
        "https://www.betta.com.au/media/catalog/product/S/T/STCCOMPACT-860862_A_1718249679.JPG?optimize=medium&fit=bounds&height=700&width=700&canvas=700:700",
      message: "S-series comfort chair",
      offer: "$400",
      reoffer: "$1200",
      show:<Link to='/halvik'>Shop Now!</Link>
    },
  ];

  const Category1 = [
    {
      id: 11,
      icon: <CiMobile1 size={30} />,
      message: "Phones",
    },
    {
      id: 12,
      icon: <HiMiniComputerDesktop size={30} />,
      message: "Computers",
    },
    {
      id: 13,
      icon: <BsSmartwatch size={30} />,
      message: "SmartWatch",
    },
    {
      id: 14,
      icon: <IoCameraReverseOutline size={30} />,
      message: "Camera",
    },
    {
      id: 15,
      icon: <FaHeadphonesSimple size={30} />,
      message: "HeadPhones",
    },
    {
      id: 16,
      icon: <SiYoutubegaming size={30} />,
      message: "Gaming",
    },
  ];

  const CartItem2 = [
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
  
  return (
    <>
      <div className="m-20">
        <div>
          {/* <div className='font-semibold'>
            <div className='flex'>
            <p>Woman's Fashion</p>
            <FaArrowRight size={20}/>
            </div>

            <div className='flex'>
            <p>Men's Fashion</p>
            <FaArrowRight size={20}/>
            </div>
            
            
            <p>Electronics</p>
            <p>Home & Lifestyle</p>
            <p>Medicine</p>
            <p>Sports & Outdoor</p>
            <p>Baby's & Toys</p>
            <p>Groceries & Pets</p>
            <p>Health & Beauty</p>
          </div> */}

          <div className="space-y-3 flex flex-col my-3">
            <h1 className="text-red-600 font-semibold">Today's</h1>
            <div className="flex justify-between">
              <h1 className="font-bold">Flash Sales</h1>
              <div className="flex space-x-3">
                <FaArrowLeft />
                <FaArrowRight />
              </div>
            </div>
            <div className="flex justify-between">
              {CartItem1.map(({ id, tag, image, message, offer, reoffer,show }) => (
                <Cart11
                  key={id}
                  Tag={tag}
                  Image={image}
                  Message={message}
                  Offer={offer}
                  Reoffer={reoffer}
                  Show={show}
                />
              ))}
            </div>
            <div className="flex items-center justify-center mt-3 w-full ">
              <div className="text-center bg-red-600 px-3 py-2 text-white rounded-xl cursor-pointer hover:scale-105 duration-200">
                View All Products
              </div>
            </div>
          </div>

          <hr />

          <div className="flex flex-col space-y-3 my-5 ">
            <h2 className="text-xl  text-red-600">Categories</h2>
            <div className="flex justify-between">
              <h2 className="text-2xl font-bold">Browser By Category</h2>
              <div className="flex space-x-3">
                <FaArrowLeft />
                <FaArrowRight />
              </div>
            </div>
            <div className="flex justify-between w-full">
              {Category1.map(({ id, icon, message }) => (
                <CategoryCart key={id} Icon={icon} Message={message} />
              ))}
            </div>
          </div>

          <hr />

          <div className="flex flex-col space-y-4">
            <h1 className="text-red-600">This Month</h1>
            <div className="flex justify-between">
              <h3 className="text-xl font-bold">Best Selling Products</h3>
              <button className="bg-red-600 text-white px-4 py-3 cursor-pointer rounded-2xl hover:scale-105 duration-200">
                View All
              </button>
            </div>
            <div className="flex justify-between">
              {CartItem2.map(({ id, tag, image, message, offer, reoffer,show }) => (
                <Cart11
                  key={id}
                  Tag={tag}
                  Image={image}
                  Message={message}
                  Offer={offer}
                  Reoffer={reoffer}
                  Show={show}
                />
              ))}
            </div>

          </div>


        </div>
      </div>
    </>
  );
}

export default Home;
