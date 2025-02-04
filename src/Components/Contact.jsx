import React from 'react'
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';

function Contact() {
  const notify = () => toast('Message sent successfully..');
  return (
    <>
      <div className='flex flex-row m-20 justify-evenly'>
        <div className='flex flex-col space-y-3 '>
          <div className='flex items-center space-x-2'>
            <p className='bg-red-500 rounded-full p-2 text-white '><IoCallOutline size={30}/></p>
            <p className='font-semibold'>Call TO US</p>
          </div>
          <p>We are available 24/7,7 days a week</p>
          <p>Phone: +91 9075566776</p>
          <hr />
          <div className='flex items-center space-x-2'>
            <p className='bg-red-500 rounded-full p-2 text-white'><CiMail size={30}/></p>
            <p className='font-semibold'>Write TO US</p>
          </div>
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p>Email:championxi@gmail.com</p>
          <p>Email:championxisohel@gmail.com</p>
        </div>

        <div className='flex flex-col space-y-6'>
          <div className='flex justify-between w-full space-x-4'>
            <input type="text" className='bg-slate-200 p-2 rounded-md' placeholder='Your Name' />
            <input type="email" className='bg-slate-200 p-2 rounded-md' placeholder='Your Email' />
            <input type='text'className='bg-slate-200 p-2 rounded-md'  placeholder='Your Phone'/>
          </div>
          <textarea className='bg-slate-200 p-2 rounded-xl' rows={8} placeholder='Your Message'></textarea>
          <div className='flex w-full items-end justify-end space-x-3'>
          <Link to='/'>
            <button className='bg-red-600 px-3 py-2 rounded-xl text-white cursor-pointer'>HOME</button>
            </Link>
            <button onClick={notify} className='bg-red-600 px-3 py-2 rounded-xl text-white cursor-pointer'>send Massage</button>
            <Toaster />
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
