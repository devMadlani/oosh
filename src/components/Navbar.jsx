import React from "react";
import logo from "/images/Oosh!.png";
import icon from "/images/addCart.png";
import search from "/images/search.png";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="px-4 mx-auto container max-w-[1200px] ">
      <div className="flex justify-between py-5">
        <img className="image" src={logo} alt="" />
        <div className="items-center gap-10  no-underline text-xs hidden md:flex">
          <Link to="/">Home</Link>
          <Link to="/product">Products</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <Link to="/faqs">FAQs</Link>
        </div>
        <div className="flex">
          <img className="object-none mr-[10px]" src={search} alt="" />
          <Link to="/cart">
            <img className="object-none w-[22px] ml-[9px]" src={icon} alt="" />
          </Link>
          <img
            src="/images/menu.png"
            className="object-none ml-4 md:hidden"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
