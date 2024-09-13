import React, { useState } from "react";

function Done() {
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
          <div className="progress h-full"></div>
        </div>

        <div className="p-2 buynowBtn rounded">
          <img src="/images/order.png" alt="" />
        </div>
      </div>
      <div className="flex justify-center mt-[105px] relative">
        <div className="rounded-full doneShdow doneBackground w-[128px] h-[128px]"></div>
        <img src="/images/done.png" className="absolute top-[45px]" alt="" />
      </div>
      <div className="flex flex-col justify-center">
        <div className="mx-auto text-[16px] font-bold lg:text-[20px] mt-12 text-[rgba(38,35,29,1)] mb-[2px]">
          Congratulation
        </div>
        <div className="mx-auto text-[12px] font-medium lg:text-[14px] text-[rgba(38,35,29,0.5)] ">
          Order placed successfully
        </div>
      </div>

      <div className="flex flex-wrap-reverse justify-center gap-2 my-24 w-[50%] mx-auto">
        <button className="flex items-center justify-center py-2 px-[8px] border-2 border-[rgba(38,35,29,0.1)] rounded">
          <img className="pt-[2px] mr-1" src="/images/back.png" alt="" />
          <span className="text-[12px] pl-1 lg:text-sm">Back to Products</span>
        </button>
        <button className="flex items-center justify-center py-2 px-[8px] border-2 border-[rgba(38,35,29,0.1)] bg-[rgba(38,35,29,1)] rounded">
          <span className="text-[12px] pl-1 lg:text-sm text-[white]">
            View order details
          </span>
        </button>
      </div>
    </div>
  );
}

export default Done;
