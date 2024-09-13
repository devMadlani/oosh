import React, { useContext, useState } from "react";
import { ProductContext } from "./ProductProvider";
import { Link } from "react-router-dom";
function Checkout() {
  const item = useContext(ProductContext);
  const [counter, setCounter] = useState(1);
  const [accordian, setAccordian] = useState(false);
  const minus = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };
  const plus = () => {
    setCounter(counter + 1);
  };
  const toggelAccordian = () => {
    setAccordian(!accordian);
  };

  return (
    <div>
      <div className="flex justify-center my-6">
        <div className="p-2 buynowBtn rounded">
          <img src="/images/addCart.png" alt="" />
        </div>
        <div className="relative top-4 border-1 bg-[rgba(230,230,230,1)] w-16 h-1 md:w-[188px]">
          <div className="progress h-full "></div>
        </div>

        <div className="p-2 buynowBtn rounded">
          <img src="/images/checkout.png" alt="" />
        </div>
        <div className="relative top-4 border-1 bg-[rgba(230,230,230,1)]  w-16 h-1 md:w-[188px]">
          <div className="progress w-1/2  h-full"></div>
        </div>

        <div className="p-2 bg-[rgba(230,230,230,1)] rounded">
          <img src="/images/order.png" alt="" />
        </div>
      </div>
      <div className="flex flex-wrap mb-12 ">
        <div className="flex flex-col gap-2 w-[250px] border-2 rounded-lg my-5 mx-auto md:w-[450px] lg:w-[700px] xl:ml-auto xl:mr-4">
          <div className="flex flex-col my-4 justify-between mx-3">
            <h1 className="text-[16px] font-bold ml-[12px] lg:text-[20px]">
              Checkout
            </h1>
          </div>
          <hr />
          <div className="flex flex-col justify-between gap-1 mx-4 my-2 ">
            <form className="flex flex-wrap flex-col " action="">
              <div className="mb-[10px  ]">
                <h1 className="text-sm font-bold lg:text-[16px]">
                  Personal Details
                </h1>
              </div>
              <div className="flex flex-wrap justify-between gap-1 mb-2">
                <div>
                  <h1 htmlFor="name" className="text-[12px] lg:text-sm">
                    Name
                  </h1>
                  <input
                    type="text"
                    className="border border-[rgba(38,35,29,0.1)] rounded pl-4 h-[40px] lg:w-[320px]"
                  />
                </div>
                <div>
                  <h1 htmlFor="emil" className="text-[12px] lg:text-sm">
                    Email
                  </h1>
                  <input
                    type="text"
                    className="border border-[rgba(38,35,29,0.1)] rounded pl-4  w-[200px] h-[40px] lg:w-[320px]"
                  />
                </div>
              </div>
              <div className="mb-3">
                <h1 htmlFor="name" className="text-[12px] lg:text-sm">
                  Phone No
                </h1>
                <input
                  type="text"
                  className="border border-[rgba(38,35,29,0.1)] rounded pl-4 h-[40px] lg:w-[320px]"
                />
              </div>
              <div className="mb-[10px]">
                <h1 className="text-sm font-bold lg:text-[16px]">
                  Shipping Address
                </h1>
              </div>
              <div className="flex flex-wrap justify-between gap-1 mb-2">
                <div>
                  <h1 htmlFor="" className="text-[12px] lg:text-sm">
                    Street Address
                  </h1>
                  <input
                    type="text"
                    className="border border-[rgba(38,35,29,0.1)] rounded pl-4 h-[40px] lg:w-[320px]"
                  />
                </div>
                <div>
                  <h1 htmlFor="" className="text-[12px] lg:text-sm">
                    Apartment/Suite/Unit
                  </h1>
                  <input
                    type="text"
                    className="border border-[rgba(38,35,29,0.1)] rounded pl-4  w-[200px] h-[40px] lg:w-[320px]"
                  />
                </div>
              </div>
              <div className="flex flex-wrap justify-between">
                <div className="mb-2">
                  <h1 htmlFor="" className=" text-[12px] lg:text-sm">
                    Country
                  </h1>
                  <select
                    name=""
                    id=""
                    className="w-[100px]  h-10 border rounded border-[rgba(38,35,29,0.1)] lg:w-[140px] "
                  ></select>
                </div>
                <div className="mb-2">
                  <h1 htmlFor="" className=" text-[12px] lg:text-sm">
                    State/Province
                  </h1>
                  <select
                    name=""
                    id=""
                    className="w-[100px] h-10 border rounded border-[rgba(38,35,29,0.1)] lg:w-[140px]"
                  ></select>
                </div>
                <div className="mb-2">
                  <h1 htmlFor="" className=" text-[12px] lg:text-sm">
                    City
                  </h1>
                  <select
                    name=""
                    id=""
                    className="w-[100px] m h-10 border rounded border-[rgba(38,35,29,0.1)] lg:w-[140px] "
                  ></select>
                </div>
                <div className="mb-2">
                  <h1 htmlFor="" className=" text-[12px] lg:text-sm">
                    Zip code
                  </h1>
                  <input
                    name=""
                    id=""
                    className="w-[100px] h-10 border rounded border-[rgba(38,35,29,0.1)] lg:w-[140px]"
                  ></input>
                </div>
              </div>
            </form>
          </div>
          <hr />
          <div className="flex justify-between p-4">
            <button className="flex items-center justify-center py-2 px-[4px] border-2 border-[rgba(38,35,29,0.1)] rounded">
              <img className="pt-[2px] mr-1" src="/images/back.png" alt="" />
              <span className="text-[12px] pl-1 lg:text-sm">
                Back to shopping
              </span>
            </button>
            <button className="flex items-center justify-center py-2 px-1 border-2 border-[rgba(38,35,29,0.1)] rounded">
              <span className="text-[12px] pl-1 lg:text-sm">Next</span>
              <img
                className="pt-[2px] ml-2"
                src="/images/next_checkout.png"
                alt=""
              />
            </button>
          </div>
        </div>

        <div className=" mt-5 w-[250px] mx-auto md:ml-[10px] md:w-[300px]">
          <div className="flex flex-col footer-background rounded">
            <div className=" text-[16px] py-2 pl-4 font-bold border-b-[1px] border-[rgba(255,255,255,0.2)] lg:py-4">
              <h1>Order Summary</h1>
            </div>
            <div className="flex justify-between border-b-[1px] border-[rgba(255,255,255,0.2)] py-2 lg:py-4">
              <h1 className="text-sm pl-4 ">Subtotal</h1>
              <h1 className="text-sm pr-4 ">{item[1].price}</h1>
            </div>
            <div className="flex justify-between border-b-[1px] border-[rgba(255,255,255,0.2)] py-2 lg:py-4">
              <h1 className="text-sm pl-4 ">V.A.T</h1>
              <h1 className="text-sm pr-4 ">{item[1].price}</h1>
            </div>
            <div className="border-b-[1px] border-[rgba(255,255,255,0.2)]">
              <div className="flex justify-between my-1">
                <h1 className="text-sm pl-4 py-2 font-bold">Add a coupon</h1>
                <button
                  onClick={toggelAccordian}
                  className="bg-[rgba(255,255,255,0.15)] text-base  m-1 mr-3 w-[32px]  rounded-sm "
                >
                  {accordian ? "-" : "+"}
                </button>{" "}
              </div>

              <div
                className={`flex relative transition-all duration-500 ease-in-out ${
                  accordian ? "h-[120px] flex" : "h-[0px]"
                }`}
              >
                <input
                  type="text"
                  className={`mx-[12px] my-2 rounded w-full h-[42px] pl-2 pr-8 bg-[rgba(255,255,255,0.05)] ${
                    accordian ? "" : "hidden"
                  } `}
                />
                <img
                  src="/images/telegram.png"
                  className={`image absolute right-[23px] top-[22px] ${
                    accordian ? "" : "hidden"
                  }`}
                />
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <div className="flex justify-between ">
                <h1 className="text-[16px] font-bold pl-4 py-2">Total</h1>
                <h1 className="text-[16px] font-bold pr-4 py-2">
                  {item[1].price}
                </h1>
              </div>
              <div className="flex flex-col justify-center mx-4">
                <Link to="/done">
                  <button className="w-full flex items-center justify-center gap-1 buynowBtn rounded px-5 py-3 text-[14px] font-bold text-[rgba(38,35,29,1)]">
                    Paynow
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
