import React from 'react'
import Cart1 from './about-cart/Cart1'
import { FaHome } from "react-icons/fa";
import { CiDollar } from "react-icons/ci";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { FcMoneyTransfer } from "react-icons/fc";

import { FaShippingFast } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";
import { SiAdguard } from "react-icons/si";

import Cart2 from './about-cart/Cart2';
import Cart3 from './about-cart/Cart3';

function About() {
  const CartItem1=[
    {
      id:1,
      icon:<FaHome size={40}/>,
      title:'10.5k',
      message:'Sallers active our site'
    },
    {
      id:2,
      icon:<CiDollar size={40}/>,
      title:'33k',
      message:'Mopnthly Product Sale'
    },
    {
      id:3,
      icon:<FaFileInvoiceDollar size={40}/>,
      title:'45.5k',
      message:'Customer active in our site'
    },
    {
      id:4,
      icon:<FcMoneyTransfer size={40}/>,
      title:'25k',
      message:'Anual gross sale in our site'
    },

  ]
  
  const CartItem2=[
    {
      id:11,
      image:'https://purepng.com/public/uploads/large/businessman-1aq.png',
      title:'Tom Cruise',
      message:'Founder & Chairman',
    },
    {
      id:12,
      image:'https://static.vecteezy.com/system/resources/thumbnails/044/245/414/small_2x/confident-young-businessman-writing-on-a-clipboard-png.png',
      title:'Emma Watson',
      message:'Managing Director',
    },
    {
      id:13,
      image:'https://t4.ftcdn.net/jpg/06/12/73/89/360_F_612738927_LIcFCiKHQhHq9R1QhkVRKvT6RelYUmgv.jpg',
      title:'Will Smith',
      message:'Product Designer',
    }
  ]

  const CartItem3=[
    {
      id:21,
      logo:<FaShippingFast size={30}/>,
      title:'FREE AND FAST DELIVERY',
      message:'Free delivery for all orders over $140'
    },
    {
      id:22,
      logo:<FaHeadset size={30}/>,
      title:'FREE AND FAST DELIVERY',
      message:'Free delivery for all orders over $140'
    },
    {
      id:23,
      logo:<SiAdguard size={30}/>,
      title:'FREE AND FAST DELIVERY',
      message:'Free delivery for all orders over $140'
    },
  ]

  return (
    <>
      <div className='flex flex-col m-20 '>
        <div className='flex justify-evenly'>
          <div className='space-y-3 w-[30%] '>
            <h1 className='font-semibold text-2xl '>Our Story</h1>
            <p className='text-left'>Our journey started with a simple idea: to make shopping easier, more enjoyable, and accessible to everyone. Whether it’s the latest fashion trends, must-have gadgets, or everyday essentials, we wanted to create a platform where customers could find everything they need in one place.</p>
            <p>We’re constantly evolving, expanding our collections, and improving our services to make your shopping experience better. Thank you for being a part of our story—because shopping is more than just buying, it’s about the experience.</p>
          </div>
          <img className='h-[300px] w-[500px] rounded-2xl' src="https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2021-05/revenge%20shopping.jpg" alt="" />
        </div>

        <div className='flex justify-between w-[90%] mx-20 my-10'>
          {
            CartItem1.map(({id,icon,title,message})=>(
              <Cart1 key={id} Icon={icon} Title={title} Msg={message}/>
            ))
          }
        </div>

        <div className='flex justify-between w-[90%] mx-20 my-10'>
          {
            CartItem2.map(({id,image,title,message})=>(
              <Cart2 key={id} Image={image} Title={title} Message={message} />
            ))
          }
        </div>

        <div className='flex justify-between w-[90%] mx-20 my-10'>
          {
            CartItem3.map(({id,logo,title,message})=>(
              <Cart3 key={id} Logo={logo} Title={title} Message={message} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default About
