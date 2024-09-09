import React from "react";
import Slider from "./Slider";
import Navbar from "./Navbar";

function Main() {
  return (
    <div>
      <div className="relative">

        <div className="container mb-10 flex flex-wrap justify-between mt-8 relative">
          <div className="w-[555px] mt-4 mb-[150px]">
            <h1 className="text-xs leading-normal pb-5">EYELID & LASH CLEANSER</h1>
            <h1 className="text-5xl pb-5 leading-normal">Get <span className="text-gradient-custom text-5xl">clean</span> and <br /><span className="text-gradient-custom text-5xl ">comfortable</span> eyes.</h1>
            <p className="text-xs text-[rgba(38,35,29,0.8)]">Our specially formulated cleanser removes dirt, makeup, and impurities, leaving your eyes feeling refreshed and revitalized. Designed for daily use, it gently purifies your eyelids and lashes, helping you achieve clear, comfortable eyes that look and feel their best.</p>
            <button className="mt-7 btnShadow flex buynowBtn rounded px-5 py-3 text-[10px] text-[rgba(38,35,29,1)]">Buy Now <img className="image h-3 w-3 ml-[4px]" src="/images/Icon.png" alt="" /></button>
          </div>
          <img src="/images/Polygon2.png" className="image absolute top-[345px] left-96" alt="" />
          <div className="w-[555px] mt-4 relative">
            <img className="absolute w-[258px] right-[369px]" src="/images/Group 20.png" alt="" />
          </div>

        </div>
        <img src="/images/Maskgroup.png" className="absolute bottom-0 image w-[229px]" alt="" />
        <img className="absolute top-1 right-0 w-[110px]" src="/images/Mask_group.png" alt="" />
        <div className="absolute bottom-0 right-0">

          <img className="image w-[500px]" src="/images/Group 19.png" alt="" />
        </div>

      </div>
      <div className="container">
        <div className="w-[1128px] text-center mt-[80px]">
          <div className="text-[rgba(38,35,29,1)] font-serif">Daily Routine for Clear, Healthy Eyes</div>
          <div className="text-4xl mt-4">Maintain eye <span className="text-gradient-custom text-4xl">health</span> with regular eyelid <span className="text-gradient-custom text-4xl">hygiene</span></div>
          <div className="mt-10 text-[rgba(38,35,29,0.8)] text-[14px]">Prioritize your eye health with our gentle eyelid and lash cleanser. Regular use helps prevent irritation, dryness, and buildup, promoting overall eye comfort. Keep your eyes feeling fresh and healthy by incorporating this essential step into your daily hygiene routine.</div>
        </div>
      </div>
      <div className="container flex justify-around mt-20">
        <div className="card">
          <div className=" w-8 rounded m-7 ">
            <img src="/images/eye-open.png" className="m-auto w-[39px] object-none" alt="" />
          </div>
          <h1 className="ml-7 text-lg">Eye Infections</h1>
          <div className="card-text">
            Removing dirt, oil, and bacteria from the eyelids helps reduce the risk of infections like conjunctivitis (pink eye) and sties.
          </div>
        </div>
        <div className="card">
          <div className=" w-8 rounded m-7 ">
            <img src="/images/eye-open.png" className="m-auto w-[39px] object-none" alt="" />
          </div>
          <h1 className="ml-7 text-lg">Dry Eye</h1>
          <div className="card-text">
            Clean eyelids can help prevent clogged oil glands, which contribute to dry eye syndrome.
          </div>
        </div>
        <div className="card">
          <div className=" w-8 rounded m-7 ">
            <img src="/images/eye-open.png" className="m-auto w-[39px] object-none" alt="" />
          </div>
          <h1 className="ml-7 text-lg">Improved Vision</h1>
          <div className="card-text">
            By maintaining clear eyelids, you can enhance your overall vision quality.
          </div>
        </div>
        <div className="card">
          <div className=" w-8 rounded m-7 ">
            <img src="/images/eye-open.png" className="m-auto w-[39px] object-none" alt="" />
          </div>
          <h1 className="ml-7 text-lg">Increased Comfort</h1>
          <div className="card-text">
            Clean eyelids can help alleviate itchiness, irritation, and discomfort.
          </div>
        </div>

      </div>
      <div className="flex mt-20 w-full h-[500px] mb-[100px] relative">
        <div className="w-[50%] flex justify-center items-center" style={{ background: "radial-gradient(71.32% 68.99% at 47.18% 48.91%, #415580 0%, #202A40 100%)" }}>
          <img src="/images/IMG_3516 1.png" className="w-[340px]" alt="" />
        </div>
        <div className="w-[50%]">
          <div className="ml-20 mt-10 w-[462px]">
            <h1 className="text-sm text-[rgba(0,0,0,1)]  mb-4">OOSH!</h1>
            <p className="text-[40px] mb-5">The Broosh™ - Whisper Touch Eyelid Brush </p>
            <p className="text-xs text-[rgba(38,35,29,0.8)] mb-14">For use with all eyelids and lashes. Envisioned and designed by an eye doctor, with a custom formula created by a team of experts! Oosh calls on the age old properties of honey and other natural ingredients to clean, soothe, and shield the sensitive eyelid/eyelash area.</p>
            <button className="mt-7 btnShadow flex buynowBtn rounded px-5 py-3 text-[10px] text-[rgba(38,35,29,1)]">Buy Now <img className="image h-3 w-3 ml-[4px]" src="/images/Icon.png" alt="" /></button>
          </div>
          <img className="image absolute -bottom-[26px] w-[242px] right-[153px]" src="/images/Group 33.png" alt="" />
        </div>
      </div>
      <Slider/>
        <div className="flex flex-col items-center relative overflow-hidden bg-[rgba(255,251,242,1);] pt-16 ">
          <h1 className="text-sm mb-4">Expert Tips for Optimal Eyelid Hygiene</h1>
          <h1 className="text-4xl text-center mb-6">Would you like to <span className="text-gradient-custom text-4xl">know more</span> about how to <br /><span className="text-gradient-custom text-4xl">clean</span> your eyelids?</h1>
          <div className="w-[744px] mb-10">
            <p className="text-sm text-center">Discover the best practices for maintaining clean and healthy eyelids. Our guide offers simple, effective steps to ensure your eyelids and lashes stay free from irritants and build up. Learn how regular eyelid hygiene can enhance your eye comfort and overall eye health.</p>
          </div>

          <div className="justify-center mb-10">
            <button className="mt-7 btnShadow flex buynowBtn rounded px-5 py-3 text-[12px] text-[rgba(38,35,29,1)]">Learn more <img className="image ml-[5px] mt-[1px]" src="/images/arrow.png" alt="" /></button>
          </div>
        <img src="/images/Mask group.png" className="absolute -left-[120px] bottom-0 " alt="" />
        <img src="/images/Mask group (1).png" className="absolute -right-[160px] bottom-0 " alt="" />
        </div>
    </div>
  );
}

export default Main;
