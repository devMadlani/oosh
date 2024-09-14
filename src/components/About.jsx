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
      <div className="flex flex-wrap-reverse">
        <div>
          <h1 className="text-[10px] md:text-[12px]">Goodness in Every Drop</h1>
          <h1 className="text-[32px] md:text-[40px]">Sourced from rich and <span className="text-gradient-custom">pure honey.</span> </h1>
        </div>
        <div className="">
          <img src="/images/about_honey.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
