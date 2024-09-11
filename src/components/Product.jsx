import React from "react";
import ProductItem from "./ProductItem";

function Product() {
  return (
    <div>
      <div className="relative footer-background ">
        <div className="container px-5 mb-10 flex flex-wrap justify-between relative">
          <div className="max-w-[555px] mt-4 mb-[150px]">
            <h1 className="text-xs leading-normal pb-2">
              Nature-Inspired Essentials
            </h1>
            <h1 className="text-3xl pb-5 leading-normal max-w-[448px] sm:text-4xl md:text-5xl">
              Our{" "} 
              <span className="text-gradient-custom text-3xl sm:text-4xl md:text-5xl">
                carefully crafted
              </span>
              <br />
              collection for your eye
              health
            </h1>
            <p className="text-xs text-[rgba(255,255,255,0.8);] max-w-[552px]">
              Whether you're looking to enhance your self-care rituals or simply
              seeking high-quality products for daily use, our collections have
              something for everyone. From nourishing honey-infused items to
              everyday wellness must-haves, explore our range of thoughtfully
              curated products designed to support your well-being.
            </p>
          </div>
        </div>
        <div className="w-[50%]">
          <img
            src="/images/Maskgroup.png"
            className="absolute hidden bottom-0 md:inline md:w-[170px] lg:w-[230px]"
            alt=""
          />
          <img
            className="absolute hidden top-14 right-0 md:inline w-[100px]"
            src="/images/Mask_group.png"
            alt=""
          />
          <img
            className="absolute w-[425px] bottom-0 right-0 z-[1] lg:w-[655px] "
            src="/images/big.png"
            alt=""
          />
          <img
            className="absolute w-[111px] bottom-0 right-[120px] z-0 lg:w-[275px]"
            src="/images/model.png"
            alt=""
          />
          

          <img
            className="absolute w-[58px] bottom-0 right-[132px] z-[2] lg:w-[168px]"
            src="/images/products.png"
            alt=""
          />
        </div>
      </div>
      <ProductItem/>
    </div>
  );
}

export default Product;
