import React from "react";
import toast, { Toaster } from 'react-hot-toast';


function Account() {
  const notify = () => toast('You Reset your Content');
  
  return (
    <>
      <div className="flex px-20 py-10 justify-evenly">
        <div className="flex flex-col space-y-2">
          <h1 className="text-xl font-semibold">Manage My Account</h1>
          <div className="ml-10">
            <p className="text-red-600 ">My Profile</p>
            <p className="text-gray-600">Address Book</p>
            <p className="text-gray-600">My Payment option</p>
          </div>
          <h1 className="text-xl font-semibold">My Orders</h1>
          <div className="ml-10">
            <p className="text-gray-600">My Returns</p>
            <p className="text-gray-600">My Cancellations</p>
          </div>
          <h1 className="text-xl font-semibold">My WishList</h1>
        </div>

        <div className="flex flex-col w-[60%]  p-3 ">
          <form action="/" className="space-y-4">
            <h1 className="text-2xl text-red-600">Edit Your Profile</h1>
            <div className="flex justify-evenly space-x-2">
              <div className="w-[50%]">
                <p>Frist Name</p>
                <input type="text" placeholder="Enter name here" className="w-full px-3 py-2  shadow-2xl rounded-xl  hover:scale-105 duration-200" required pattern="[A-Za-z]{1,20}"/>
              </div>
              <div className="w-[50%]">
                <p>Last Name</p>
                <input type="text" placeholder="Enter Last name here" className="w-full px-3 py-2  shadow-2xl rounded-xl  hover:scale-105 duration-200" required pattern="[A-Za-z]{1,20}"/>
              </div>
            </div>

            <div className="flex justify-evenly space-x-2">
              <div className="w-[50%]">
                <p>Email</p>
                <input type="text" placeholder="abc@gmail.com" className="w-full px-3 py-2  shadow-2xl rounded-xl  hover:scale-105 duration-200" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/>
              </div>
              <div className="w-[50%]">
                <p>Address</p>
                <input type="text" placeholder="Enter your address" className="w-full px-3 py-2 shadow-2xl hover:shadow-2xl rounded-xl  hover:scale-105 duration-200"/>
              </div>
            </div>

            <h1>Password Changes</h1>
            <div className="flex flex-col space-y-6">
            <input type="password" placeholder="Current Password" className="w-full px-3 py-2  hover:shadow-2xl rounded-xl  hover:scale-105 duration-200" required />
            <input type="password" placeholder="New Password" className="w-full px-3 py-2  hover:shadow-2xl rounded-xl  hover:scale-105 duration-200" required/>
            <input type="password" placeholder="Confirm New Password" className="w-full px-3 py-2 hover:shadow-2xl  border-gray-700 rounded-xl hover:scale-105 duration-200" required/>
            </div>

            <div className="flex space-x-2 justify-end mt-10">
              <button onClick={notify} className="bg-slate-300 px-3 py-2 rounded-xl cursor-pointer hover:scale-110 duration-200" type="reset">Cancel</button>
              <Toaster />
              <button  className="bg-red-600 px-3 py-2 rounded-xl cursor-pointer text-white hover:scale-110 duration-200">Save Changes</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Account;
