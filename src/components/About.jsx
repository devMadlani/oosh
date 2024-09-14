import React from "react";

function About() {
  return (
    <div>
      <div className="relative about-background h-[500px]">
        <div className="flex flex-col justify-center items-center px-5">
          <div className="text-4xl mt-20 text-[#26231D] sm:mt-32">About us</div>
          <div className="max-w-[744px] text-[#26231D] text-center mt-5 text-sm">
            We craft nature-inspired products that elevate your daily routine
            and nurture your well-being. Discover essentials designed to bring
            balance and joy to everyday life.
          </div>
        </div>
        <img
          className="absolute w-[200px] bottom-0 left-0  md:w-[300px] lg:w-[400px]"
          src="/images/Maskgroup.png"
          alt=""
        />
        <img
          className="absolute w-[153px] image bottom-0 right-0 sm:w-[170px] md:w-[240px] lg:w-[400px] "
          src="/images/Mask group (1).png"
          alt=""
        />
      </div>
      <div className="flex flex-wrap-reverse justify-between md:justify-center xl:justify-between">
        <div className="my-3 max-w-[500px]  m-6 lg:ml-14 xl:my-auto ">
          <h1 className="text-[10px] md:text-[12px] ">Goodness in Every Dro0p</h1>
          <h1 className="text-[32px] md:text-[40px] ">Sourced from rich and <span className="text-gradient-custom">pure honey.</span> </h1>
          <p className="text-[12px] md:text-[14px] my-3">Our products are infused with rich, pure honey sourced directly from nature. Packed with natural antioxidants and nutrients, this golden ingredient nourishes and revitalizes, offering your skin the best care it deserves.</p>
        </div>
        <div className="">
          <img src="/images/about_honey.png" className="w-[674px]" alt="" />
        </div>
      </div>
      <div className="flex flex-wrap  justify-between md:justify-center xl:justify-between">
      <div className="">
          <img src="/images/about_second.png" className="w-[674px]" alt="" />
        </div>
        <div className="my-3 max-w-[500px]  m-6 lg:ml-14 xl:my-auto ">
          <h1 className="text-[10px] md:text-[12px] ">Naturally Nurtured, Purely Organic</h1>
          <h1 className="text-[32px] md:text-[40px] ">Experience the purity of <span className="text-gradient-custom">100% organic </span> care </h1>
          <p className="text-[12px] md:text-[14px] my-3">Our products are crafted with the finest organic ingredients, free from harmful chemicals and additives. Experience the nourishing and protective power of nature with skincare that’s pure, effective, and designed to care for your skin naturally.</p>
          <button className="mt-7 btnShadow flex buynowBtn rounded px-5 py-3 text-[10px] text-[rgba(38,35,29,1)]">Buy Now <img className="image h-3 w-3 ml-[4px]" src="/images/Icon.png" alt="" /></button>
        </div>
      </div>
        <div className="flex flex-col items-center relative overflow-hidden bg-[rgba(255,251,242,1);] pt-16 px-4">
            <h1 className="text-[10px] mb-4 lg:text-[14px]">Expert Tips for Optimal Eyelid Hygiene</h1>
            <h1 className="text-[32px] text-center mb-6 lg:text-[40px]">Would you like to <span className="text-gradient-custom text-[32px] lg:text-[40px]">know more</span> about how to <br /><span className="text-gradient-custom text-[32px] lg:text-[40px]">clean</span> your eyelids?</h1>
            <div className="max-w-[744px] mb-10">
              <p className="text-sm text-center mx-4">Discover the best practices for maintaining clean and healthy eyelids. Our guide offers simple, effective steps to ensure your eyelids and lashes stay free from irritants and build up. Learn how regular eyelid hygiene can enhance your eye comfort and overall eye health.</p>
            </div>

            <div className="justify-center mb-10">
              <button className="mt-7 btnShadow flex buynowBtn rounded px-5 py-3 text-[12px] text-[rgba(38,35,29,1)]">Learn more <img className="image ml-[5px] mt-[5px]" src="/images/arrow.png" alt="" /></button>
            </div>
          <img src="/images/Mask group.png" className="absolute w-[152px] left-0 lg:w-[350px] lg:left-0 bottom-0 " alt="" />
          <img src="/images/Mask group (1).png" className="absolute w-[120px] bottom-0 right-0 lg:w-[300px] lg:right-[0px] lg:bottom-0 " alt="" />
          </div>
    </div>
  );
}

export default About;
