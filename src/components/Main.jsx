import React from "react";
import Slider from "./Slider";

function Main() {
  return (
    <div>
      <div className="relative">
        <div className="container mb-10 flex flex-wrap justify-between mt-8 relative">
          <div className="w-[555px] mt-4 mb-[130px] ml-4">
            <h1 className="text-xs leading-normal pb-5">
              EYELID & LASH CLEANSER
            </h1>
            <h1 className="text-5xl pb-5 leading-normal">
              Get <span className="text-gradient-custom text-5xl">clean</span>{" "}
              and <br />
              <span className="text-gradient-custom text-5xl ">
                comfortable
              </span>{" "}
              eyes.
            </h1>
            <p className="text-xs text-[rgba(38,35,29,0.8)]">
              Our specially formulated cleanser removes dirt, makeup, and
              impurities, leaving your eyes feeling refreshed and revitalized.
              Designed for daily use, it gently purifies your eyelids and
              lashes, helping you achieve clear, comfortable eyes that look and
              feel their best.
            </p>
            <button className="mt-7 btnShadow flex buynowBtn rounded px-5 py-3 text-[10px] text-[rgba(38,35,29,1)]">
              Buy Now{" "}
              <img
                className="image h-3 w-3 ml-[4px]"
                src="/images/Icon.png"
                alt=""
              />
            </button>
          </div>
          <img
            src="/images/Polygon2.png"
            className="hidden absolute top-[345px] left-96"
            alt=""
          />

          <img
            className="absolute hidden md:inline md:right-[180px] lg:right-[290px]"
            src="/images/Group 20.png"
            alt=""
          />
        </div>
        <img
          src="/images/Maskgroup.png"
          className="absolute bottom-0 image w-[100px] lg:w-[220px]"
          alt=""
        />
        <img
          className="absolute top-32 right-0 w-[60px] md:w-[120px] md:top-1"
          src="/images/Mask_group.png"
          alt=""
        />
        <div className="absolute bottom-0 right-0">
          <img
            className="w-[220px] md:w-[270px] lg:w-[470px]"
            src="/images/Group 19.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <div className="max-w-[1128px] text-center mt-[80px] px-2">
          <div className="text-[rgba(38,35,29,1)] font-serif">
            Daily Routine for Clear, Healthy Eyes
          </div>
          <div className="text-4xl mt-4">
            Maintain eye{" "}
            <span className="text-gradient-custom text-4xl">health</span> with
            regular eyelid{" "}
            <span className="text-gradient-custom text-4xl">hygiene</span>
          </div>
          <div className="mt-10 text-[rgba(38,35,29,0.8)] text-[14px] px-4">
            Prioritize your eye health with our gentle eyelid and lash cleanser.
            Regular use helps prevent irritation, dryness, and buildup,
            promoting overall eye comfort. Keep your eyes feeling fresh and
            healthy by incorporating this essential step into your daily hygiene
            routine.
          </div>
        </div>
      </div>
      <div className="container flex flex-wrap justify-center gap-6 mt-20">
        <div className="flex flex-wrap justify-center gap-6">
          <div className="card border border-[rgba(38,35,29,0.1)]">
            <div className=" w-8 rounded m-7 ">
              <img
                src="/images/eye-open.png"
                className="m-auto w-[39px] object-none"
                alt=""
              />
            </div>
            <h1 className="ml-7 text-lg">Eye Infections</h1>
            <div className="card-text w-[150px] mb-2">
              Removing dirt, oil, and bacteria from the eyelids helps reduce the
              risk of infections like conjunctivitis (pink eye) and sties.
            </div>
          </div>
          <div className="card">
            <div className=" w-8 rounded m-7 ">
              <img
                src="/images/eye-open.png"
                className="m-auto w-[39px] object-none"
                alt=""
              />
            </div>
            <h1 className="ml-7 text-lg">Dry Eye</h1>
            <div className="card-text">
              Clean eyelids can help prevent clogged oil glands, which
              contribute to dry eye syndrome.
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="card">
            <div className=" w-8 rounded m-7 ">
              <img
                src="/images/eye-open.png"
                className="m-auto w-[39px] object-none"
                alt=""
              />
            </div>
            <h1 className="ml-7 text-lg">Improved Vision</h1>
            <div className="card-text">
              By maintaining clear eyelids, you can enhance your overall vision
              quality.
            </div>
          </div>
          <div className="card">
            <div className=" w-8 rounded m-7 ">
              <img
                src="/images/eye-open.png"
                className="m-auto w-[39px] object-none"
                alt=""
              />
            </div>
            <h1 className="ml-7 text-lg">Increased Comfort</h1>
            <div className="card-text">
              Clean eyelids can help alleviate itchiness, irritation, and
              discomfort.
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mt-20 w-full mb-[100px] relative">
        <div
          className="w-[375px] h-[300px] flex  justify-center items-center  lg:w-[50%] lg:h-[500px]"
          style={{
            background:
              "radial-gradient(71.32% 68.99% at 47.18% 48.91%, #415580 0%, #202A40 100%)",
          }}
        >
          <img src="/images/IMG_3516 1.png" className="w-[50%]" alt="" />
        </div>
        <div className="relative w-[375px] lg:w-[50%] p-4">
          <div className=" mx-auto lg:ml-20 mt-10 lg:w-[462px]">
            <h1 className="text-[10px] text-[rgba(0,0,0,1)]  mb-4 lg:text-sm">
              OOSH!
            </h1>
            <p className="text-[32px] lg:text-[40px] mb-5">
              The Broosh™ - Whisper Touch Eyelid Brush{" "}
            </p>
            <p className="text-xs text-[rgba(38,35,29,0.8)] mb-14 lg:text-[14px]">
              For use with all eyelids and lashes. Envisioned and designed by an
              eye doctor, with a custom formula created by a team of experts!
              Oosh calls on the age old properties of honey and other natural
              ingredients to clean, soothe, and shield the sensitive
              eyelid/eyelash area.
            </p>
            <button className="mt-7 btnShadow flex buynowBtn rounded px-5 py-3 text-[10px] text-[rgba(38,35,29,1)]">
              Buy Now{" "}
              <img
                className="image h-3 w-3 ml-[4px]"
                src="/images/Icon.png"
                alt=""
              />
            </button>
          </div>
          <img
            className="absolute bottom-0 right-[120px] lg:-bottom-[26px] w-[99px] lg:w-[242px] lg:right-[153px]"
            src="/images/Group 33.png"
            alt=""
          />
        </div>
      </div>
      <div>
        <Slider />
      </div>
      <div className="flex flex-col items-center relative overflow-hidden bg-[rgba(255,251,242,1);] pt-16 px-4">
        <h1 className="text-[10px] mb-4 lg:text-[14px]">
          Expert Tips for Optimal Eyelid Hygiene
        </h1>
        <h1 className="text-[32px] text-center mb-6 lg:text-[40px]">
          Would you like to{" "}
          <span className="text-gradient-custom text-[32px] lg:text-[40px]">
            know more
          </span>{" "}
          about how to <br />
          <span className="text-gradient-custom text-[32px] lg:text-[40px]">
            clean
          </span>{" "}
          your eyelids?
        </h1>
        <div className="max-w-[744px] mb-10">
          <p className="text-sm text-center mx-4">
            Discover the best practices for maintaining clean and healthy
            eyelids. Our guide offers simple, effective steps to ensure your
            eyelids and lashes stay free from irritants and build up. Learn how
            regular eyelid hygiene can enhance your eye comfort and overall eye
            health.
          </p>
        </div>

        <div className="justify-center mb-10">
          <button className="mt-7 btnShadow flex buynowBtn rounded px-5 py-3 text-[12px] text-[rgba(38,35,29,1)]">
            Learn more{" "}
            <img
              className="image ml-[5px] mt-[5px]"
              src="/images/arrow.png"
              alt=""
            />
          </button>
        </div>
        <img
          src="/images/Mask group.png"
          className="absolute w-[152px] left-0 lg:w-[350px] lg:left-0 bottom-0 "
          alt=""
        />
        <img
          src="/images/Mask group (1).png"
          className="absolute w-[120px] bottom-0 right-0 lg:w-[300px] lg:right-[0px] lg:bottom-0 "
          alt=""
        />
      </div>
    </div>
  );
}

export default Main;
