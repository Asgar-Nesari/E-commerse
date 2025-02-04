import React from "react";
import NavBar from "./Components/NavBar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Contact from "./Components/Contact";
import About from "./Components/About";
import SignUp from "./Components/SignUp";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Footer from "./Components/Footer";
import Wishlist from "./Components/Wishlist";
import Cart from "./Components/Cart";
import Account from "./Components/Account";
import Halvik from "./Components/allcarts/Halvik";
import NotFound from "./Components/NotFound";
import KeyBoard from "./Components/allcarts/KeyBoard";
import GamingMonitor from "./Components/allcarts/GamingMonitor";
import Chair from "./Components/allcarts/Chair";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/wishlist" element={<Wishlist/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/account" element={<Account/>} />


          <Route path="/halvik" element={<Halvik/>} />
          <Route path="/keyboard" element={<KeyBoard/>} />
          <Route path="/gamingmonitor" element={<GamingMonitor/>} />
          <Route path="/chair" element={<Chair/>} />

          <Route path="/Error" element={<NotFound/>} />
          <Route path='*' element={<Navigate to="/Error"/>} />

          
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
