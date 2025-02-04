import React from "react";
import { IoSend } from "react-icons/io5";
import playstore from "../Pictures/playstore.png";
import apple from "../Pictures/apple.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <div className="text-white bg-slate-950 flex justify-between p-10 ">
        <div className="space-y-2">
          <h1 className="font-bold text-xl">Exclusive</h1>
          <h2 className="font-semibold ">Subscribe</h2>
          <h3>Get 10% off your first order</h3>
          <div className="flex border-2 w-60 p-2 rounded-2xl">
            <input
              type="email"
              placeholder="Enter your email "
              className="outline-0  "
            />
            <IoSend size={30} />
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="text-xl font-bold ">Support</h1>
          <p>111 Bijoy sarani,Dhaka,</p>
          <p>DH 1515,Bangladesh.</p>
          <p>champianxi@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        <div className="space-y-2">
          <h1 className="text-xl font-bold">Account</h1>
          <p>My Account</p>
          <p>Login / Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>

        <div className="space-y-2">
          <h1 className="text-xl font-bold">Quick Link</h1>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>

        <div className="space-y-2">
          <h1 className="text-xl font-bold">Download App</h1>
          <p>Save $3 with App New User Only</p>
          <div className="flex p-3 space-x-1">
            <img
              className="w-[100px] h-[100px] rounded-2xl cursor-pointer hover:scale-110 duration-200"
              src="https://play-lh.googleusercontent.com/baB6Fh6K8lbEEV_xMcArdvKkpDpFPPe6Vsw4z-NCSUK79HVn6GaswCT9T-9DX1688w=w240-h480-rw"
              alt=""
            />
            <div className="flex flex-col px-2 space-y-2">
              <div className="flex flex-row border px-2 py-2 rounded-2xl cursor-pointer hover:scale-105 duration-200 ">
                <img className="h-[40px] w-[40px]" src={playstore} alt="" />

                <div>
                  <p>GET IT ON</p>
                  <h1 className="font-bold">Google Play</h1>
                </div>
              </div>

              <div className="flex flex-row border px-2 py-2 rounded-2xl cursor-pointer hover:scale-105 duration-200 ">
                <img className="h-[40px] w-[40px] text-white" src={apple} alt="" />

                <div>
                  <p>Download on the</p>
                  <h1 className="font-bold ">App Store</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-evenly">
            <FaFacebookF  size={20} className="hover:scale-125 duration-200 cursor-pointer"/>
            <FaTwitter size={20} className="hover:scale-125 duration-200 cursor-pointer"/>
            <FaInstagram size={20} className="hover:scale-125 duration-200 cursor-pointer"/>
            <FaLinkedinIn size={20} className="hover:scale-125 duration-200 cursor-pointer"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
