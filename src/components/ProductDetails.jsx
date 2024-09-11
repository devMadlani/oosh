import React, { useContext, useState } from "react";
import { ProductContext } from "./ProductProvider";
import { Link } from "react-router-dom";
function ProductDetails() {
  const item = useContext(ProductContext);

  const [counter, setCounter] = useState(1);
  const minus = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };
  const plus = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="flex flex-wrap">
      <div className="flex justify-center gap-7 flex-wrap mt-[40px]">
        <div className=" itemBackground rounded-lg flex justify-center items-center w-[300px] h-[290px] sm:w-[500px] sm:h-[490px] mb-5">
          <img src="/images/products.png" className="max-w-[100px]" alt="" />
        </div>
        <div className=" pl-12 max-w-[50%]">
          <div className="max-w-[450px]">
            <h1 className="text-xs text-[rgba(38,35,29,1)] mb-2">OOSH!</h1>
            <h1 className="text-4xl mb-5">{item[1].title}</h1>
            <h1 className="text-3xl font-bold mb-3">{item[1].price} USD</h1>
            <p className="inline-flex items-center text-[12px]">
              Pay over time for orders over
              <span className="font-semibold mx-[3px] text-[12px]">$35.00</span>
              <img
                src="/images/shopPay.png"
                className="h-[15px] pt-[1px]"
                alt=""
              />
            </p>
            <Link className="underline ml-3 font-bold">Learn more </Link>
            <p className="text-sm font-medium mt-4 mb-1">Quantity:</p>
            <button
              onClick={minus}
              className="border border-[rgba(38,35,29,0.1)] border-r-0 px-6 py-3 text-sm font-semibold "
            >
              -
            </button>
            <label className="border border-[rgba(38,35,29,0.1)] px-7 pt-3 pb-[13px] text-sm font-semibold">
              {counter}
            </label>
            <button
              onClick={plus}
              className="border border-[rgba(38,35,29,0.1)] border-l-0 px-6 py-3 text-sm font-semibold "
            >
              +
            </button>
          </div>
          <div className="max-w-[450px] mt-11">
            <button className="w-full mt-5 flex items-center justify-center  gap-1 btnShadow buynowBtn rounded px-5 py-3 text-[14px] font-medium text-[rgba(38,35,29,1)]">
              Add to Cart
              <img
                className="image h-3 w-3 ml-[4px]"
                src="/images/cart.png"
                alt=""
              />
            </button>
            <button className="w-full mt-5 flex items-center justify-center  gap-1 shopShadow shopBtn rounded px-5 py-3 text-[13px] font-medium text-white">
              Buy with
              <img className="image pt-[2px]" src="/images/shop.png" alt="" />
            </button>
            <div className="text-center my-5">
              <Link className="underline ml-3 font-medium text-[12px]">
                More payment options
              </Link>
            </div>
          </div>
          <div>
            <div>
              <p className="text-xl mt-10 mb-3 font-bold">Description</p>
              <p className="text-[12px] ">
                For use with all eyelids and lashes. Envisioned and designed by
                an eye doctor, with a custom formula created by a team of
                experts! Oosh calls on the age old properties of honey and other
                natural ingredients to clean, soothe, and shield the sensitive
                eyelid/eyelash area. Use with The Broosh™ by Oosh! to provide
                complete support.
              </p>
            </div>
            <div>
              <p className="text-xl mt-10 mb-3 font-bold">More Products</p>
              <div className="max-w-[264px] border rounded-lg border-[rgba(38,35,29,0.1)] mb-12 ">
                <div className="itemBackground rounded-t-lg flex justify-center items-center min-h-[184px]">
                  <img src={item[2].img} className="w-[40%]" alt="" />
                </div>
                <div className="flex flex-col m-4">
                  <h1 className="text-lg text-[rgba(38,35,29,1)] font-medium ">
                    {item[2].title}
                  </h1>
                  <div className="flex justify-between ">
                    <p className="inline text-[20px] font-bold">
                      {item[2].price}
                    </p>
                    <Link className="items-center flex  underline ml-3 font-bold">
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
