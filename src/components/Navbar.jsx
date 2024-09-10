import React from "react";
import logo from "/images/Oosh!.png";
import icon from "/images/Icon.png";
import search from "/images/search.png";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="container z-40">
      <div className="flex justify-between py-5">
        <img className="image" src={logo} alt="" />
        <div className="flex items-center gap-10  no-underline text-xs">
          <Link  to="/">Home</Link>
          <Link to="/product">Products</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <Link to="/faqs">FAQs</Link>
          <Link to="/faqs">FAQs</Link>
        </div>
        <div className="flex justify-between gap-3">
          <img className="w-30" src={search} alt="" />
          <img className="w-30" src={icon} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
