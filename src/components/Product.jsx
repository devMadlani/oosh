import React from "react";
import Navbar from "./Navbar";

function Product() {
  return (
    <div className="relative footer-background ">
      <div className="container mb-10 flex flex-wrap justify-between mt-8 relative">
        <div className="w-[555px] mt-4 mb-[150px]">
          <h1 className="text-xs leading-normal pb-2">
            Nature-Inspired Essentials
          </h1>
          <h1 className="text-5xl pb-5 leading-normal">
            Our{" "}
            <span className="text-gradient-custom text-5xl">
              carefully crafted{" "}
            </span>{" "}
            <br />
            collection for your eye <br />
            health{" "}
          </h1>
          <p className="text-xs text-[rgba(255,255,255,0.8);] w-[552px]">
            Whether you're looking to enhance your self-care rituals or simply
            seeking high-quality products for daily use, our collections have
            something for everyone. From nourishing honey-infused items to
            everyday wellness must-haves, explore our range of thoughtfully
            curated products designed to support your well-being.
          </p>
        </div>
      </div>
      
      <img src="/images/Maskgroup.png" className="absolute bottom-0 image w-[229px]" alt="" />
      <img
        className="absolute top-14 right-0 w-[110px]"
        src="/images/Mask_group.png"
        alt=""
      />
       <img
        className="absolute bottom-0 right-0 z-[1]"
        src="/images/big.png"
        alt=""
      />
        <img
        className="absolute bottom-0 right-[120px] z-0"
        src="/images/model.png"
        alt=""
      />
        <img
        className="absolute bottom-0 right-0 z-[3]"
        src="/images/Maskgroup2.png"
        alt=""
      />
      
       <img
        className="absolute bottom-0 right-[112px] z-[2]"
        src="/images/products.png"
        alt=""
      />
      <div></div>
    </div>
  );
}

export default Product;
