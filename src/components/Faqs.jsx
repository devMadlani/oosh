import React, { useState } from "react";

function Faqs() {
  const [accordian, setAccordian] = useState(null);
  const questions = [
    {
      title: "Are your eye care products safe for sensitive eyes? ",
      answer:
        "Yes, our eye care products are formulated with gentle, natural ingredients that are safe for sensitive eyes. We avoid harsh chemicals and use soothing, nourishing components to ensure comfort and safety. For best results, we recommend doing a patch test before using any new product on your eyes.",
    },
    {
      title: "What ingredients do you use in your eye care products?",
      answer:
        "Yes, our eye care products are formulated with gentle, natural ingredients that are safe for sensitive eyes. We avoid harsh chemicals and use soothing, nourishing components to ensure comfort and safety. For best results, we recommend doing a patch test before using any new product on your eyes.",
    },
    {
      title:
        "How should I store my eye care products to maintain their quality?",
      answer:
        "Yes, our eye care products are formulated with gentle, natural ingredients that are safe for sensitive eyes. We avoid harsh chemicals and use soothing, nourishing components to ensure comfort and safety. For best results, we recommend doing a patch test before using any new product on your eyes.",
    },
    {
      title: "Do you test your eye care products on animals?",
      answer:
        "Yes, our eye care products are formulated with gentle, natural ingredients that are safe for sensitive eyes. We avoid harsh chemicals and use soothing, nourishing components to ensure comfort and safety. For best results, we recommend doing a patch test before using any new product on your eyes.",
    },
    {
      title: "Are your eye care products organic?",
      answer:
        "Yes, our eye care products are formulated with gentle, natural ingredients that are safe for sensitive eyes. We avoid harsh chemicals and use soothing, nourishing components to ensure comfort and safety. For best results, we recommend doing a patch test before using any new product on your eyes.",
    },
  ];
  const toggelAccordian = (index) => {
    if (accordian === index){
        setAccordian(null)
    }
    else{
        setAccordian(index)
    }
  };

  return (
    <div>
      <div className="relative footer-background h-[400px]">
        <div className="flex flex-col justify-center items-center px-5">
          <div className="text-[32px] mt-20 text-center sm:mt-32 lg:text-[40px]">
            Frequently Asked Questions
          </div>
          <div className="max-w-[744px] text-[12px]  text-center mt-5 lg:text-sm">
            Find quick answers to common questions about our products,
            ingredients, and how to make the most of your purchase. We've
            gathered everything you need to know in one convenient place.
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
      <div className="container mt-10 mb-14 p-3 mx-auto">
        <div className="max-w-[744px] mx-auto my-3  ">
          <div className="border-t-[1px] border-[rgba(38,35,29,0.5)]">
            {questions.map((que, index) => (
              <div className="flex flex-col justify-between  border-b-[1px] border-[rgba(38,35,29,0.5)]">
                <div className="flex justify-between mt-2 gap-4">
                  <h1 className="text-[16px] pl-4 py-2 font-medium min-w-[300px]">
                    {que.title}
                  </h1>
                  <button
                    onClick={()=>toggelAccordian(index)}
                    className="bg-[rgba(38,35,29,1)] min-w-[27px] text-white text-base h-[32px]  my-[3px] mr-3 w-[32px] rounded-sm "
                  >
                    {accordian ===index ? "-" : "+"}
                  </button>
                </div>
                <div
                  className={`max-w-[570px] pl-4 pr-16 lg:max-w-[700px] overflow-hidden min-h-[10px] transition-max-height duration-700 ease-in-out ${
                    accordian === index ? "max-h-[110px]" : "max-h-0"
                  }`}
                >
                  <h1
                    className={`text-[12px] text-[rgba(38,35,29,0.8)] md:text-[16px] mb-2 transition-opacity duration-700 ease-in-out ${
                      accordian === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {que.answer}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faqs;
