import React, { useContext, useState } from "react";
import { ProductContext } from "./ProductProvider";
import { Link } from "react-router-dom";
function AddCart() {
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
          <div className="progress h-full w-1/2"></div>
        </div>

        <div className="p-2 bg-[rgba(230,230,230,1)] rounded">
          <img src="/images/checkout.png" alt="" />
        </div>
        <div className="relative top-4 border-2 w-16 h-1 md:w-[188px]">
          <div className="bg-[rgba(230,230,230,1)] h-full"></div>
        </div>

        <div className="p-2 bg-[rgba(230,230,230,1)] rounded">
          <img src="/images/order.png" alt="" />
        </div>
      </div>
      <div className="flex flex-wrap mb-12 ">
        <div className="flex flex-col gap-2 w-[250px] border-2 rounded-lg my-5 mx-auto md:w-[450px] lg:w-[700px] xl:ml-auto xl:mr-4">
          <div className="flex justify-between my-4 mx-3">
            <h1 className="text-[16px] font-bold ml-[12px] lg:text-[20px]">
              Product
            </h1>
            <h1 className="text-[12px] font-medium text-[rgba(38,35,29,1)] mr-[15px] pt-[5px]">
              Total
            </h1>
          </div>
          <hr />
          <div className="flex justify-between gap-1 mx-4 my-3 ">
            <div className=" itemBackground rounded flex justify-center items-center w-[50px] h-[50px] md:w-[120px] md:h-[110px] ">
              <img src="/images/products.png" className="max-w-[25px]" alt="" />
            </div>
            <div className="flex-row ml-1">
              <h1 className="text-[8px] lg:text-[10px]">OOSH!</h1>
              <h1 className="truncate max-w-[123px] lg:text-[20px] lg:max-w-[370px] lg:mb-2">
                {item[1].title}
              </h1>
              <h1 className="hidden lg:inline text-[12px]">Quantity:</h1>
              <div className="flex min-w-[123px]">
                <button
                  onClick={minus}
                  className="border border-[rgba(38,35,29,0.1)]   border-r-0 px-3 py-[2px] text-xs font-semibold lg:py-2  lg:px-4"
                >
                  -
                </button>
                <label className="border border-[rgba(38,35,29,0.1)]  px-4 pt-[4px] pb-[2px] text-[10px] font-medium lg:pt-[10px] lg:pb-[8px]">
                  {counter}
                </label>
                <button
                  onClick={plus}
                  className="border border-[rgba(38,35,29,0.1)]  border-l-0 px-3 py-[2px] text-xs font-semibold lg:py-2 lg:px-4"
                >
                  +
                </button>
                <button className="hidden lg:inline border ml-3 lg:border-[rgba(38,35,29,0.1)] lg:px-3 rounded lg:py-2  ">
                  <img src="/images/delete.png" alt="" />
                </button>
              </div>
            </div>
            <div className="image font-bold text-[12px] lg:text-[20px] my-auto">
              {item[1].price}
            </div>
          </div>
          <hr />
          <div className="h-[60px]"></div>
          <hr />
          <div className="flex justify-between p-4">
            <button className="flex items-center justify-center p-2 border-2 border-[rgba(38,35,29,0.1)] rounded">
              <img className="pt-[2px]" src="/images/back.png" alt="" />
              <span className="text-[12px] pl-1">Back to shopping</span>
            </button>
            <h1 className="hidden text-[14px] lg:inline my-auto">
              Need help? Check our{" "}
              <Link className="text-[rgba(31,114,205,1)] underline">
                contact us
              </Link>{" "}
              page
            </h1>
          </div>
        </div>
        <div className="mt-5 w-[250px] mx-auto md:ml-[10px] md:w-[300px]">
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
                  accordian ? "h-[100px] flex" : "h-[0px]"
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
                <Link to="/checkout">
                  <button className="w-full flex items-center justify-center gap-1 buynowBtn rounded px-5 py-3 text-[14px] font-bold text-[rgba(38,35,29,1)]">
                    Proceed to checkout
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

export default AddCart;
