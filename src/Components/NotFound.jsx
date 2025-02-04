import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <>
      <div className='flex flex-col items-center justify-center space-x-5 w-full h-screen space-y-6 shadow-2xl'>
        <img className='w-[200px] h-[200px] hover:scale-105 duration-200 shadow-2xl rounded-2xl' src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg" alt="" />
        <h1 className='text-3xl font-bold '>404 Not Found</h1>
        <p className='font-semibold'>Your visited page not found.You may go home page.</p>
        <Link to='/'>

        <button className='bg-red-600 text-white p-4 rounded-xl cursor-pointer hover:scale-105 duration-200'>Back to home page</button>
        
        </Link>
      </div>
    </>
  )
}

export default NotFound
