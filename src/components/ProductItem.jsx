import React,{useContext} from "react";
import { ProductContext } from "./ProductProvider";
import { Link } from "react-router-dom";
function ProductItem() {
    const item = useContext(ProductContext)
  return (
    <div>
      <div className="container">
        <div className="flex flex-col">
          <div className="flex justify-between mb-6">
            <div className="hidden w-[360px] border border-[rgba(38,35,29,0.1)] p-[10px] text-[14px] sm:block">
              Home &gt; <b>Product</b>
            </div>
            <form action="">
              <select
                className="w-[120px] text-[14px] p-[8px] border border-[rgba(38,35,29,0.1)] mr-2"
                name="sort"
                id="sort"
              >
                <option value="1" className="">
                  Sort By Price
                </option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
              <select
                className="w-[100px] text-[14px] p-[8px] border border-[rgba(38,35,29,0.1)]"
                name="sort"
                id="sort"
              >
                <option value="1" className="">
                  Filter
                </option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </form>
          </div>
          
          <div className="flex flex-wrap justify-between">
            {item.map((item, index) => (
                <Link to="/itemDetails">

              <div
                key={index}
                className="w-[264px] border rounded-lg border-[rgba(38,35,29,0.1)] mb-8"
              >
                <div className="itemBackground rounded-t-lg flex justify-center items-center min-h-[184px]">
                  <img src={item.img} className="w-[40%]" alt="" />
                </div>
                <div className="flex flex-col m-4">
                  <h1 className="text-lg text-[rgba(38,35,29,1)] font-medium ">
                    {item.title}
                  </h1>
                  <p className="text-xs text-[rgba(38,35,29,0.8)]  line-clamp-2 my-2">
                    {item.desc}
                  </p>
                  <p className="text-[20px] font-bold">{item.price}</p>

                  <button className="mt-5 flex items-center justify-center  gap-1 btnShadow buynowBtn rounded px-5 py-3 text-[14px] font-bold text-[rgba(38,35,29,1)]">
                    Add to Cart
                    <img
                      className="image h-3 w-3 ml-[4px]"
                      src="/images/cart.png"
                      alt=""
                    />
                  </button>
                </div>
              </div>
              </Link>

            ))}
          </div>
          

        </div>
      </div>
     
    </div>
  );
}

export default ProductItem;
