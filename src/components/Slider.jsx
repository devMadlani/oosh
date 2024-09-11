import React, { useEffect, useRef, useState } from "react";

function Slider() {
  const [counter, setCounter] = useState(0);
  const slidesRef = useRef([]);
  const slides = [
    "/images/img1.png",
    "/images/img2.png",
    "/images/img3.png",
    "/images/img4.png",
    "/images/img4.png",
    "/images/img4.png",
    "/images/img4.png",
    "/images/img4.png",
    "/images/img4.png",
    "/images/img4.png",
  ];

  // Initialize slide positions on the first render
  useEffect(() => {
    slidesRef.current.forEach((slide, index) => {
      if (slide) {
        slide.style.left = `${index * 100}% `; // Similar to slide.style.left = `${index * 100}%`
      }
    });
  }, []);

  // Handles the previous button click
  const goPrev = () => {
    if (counter > 0) {
      setCounter((prevCounter) => prevCounter - 1);
    } else {
      // Optional: loop to the last slide if already at the first
      setCounter(slides.length - 1);
    }
  };

  // Handles the next button click
  const goNext = () => {
    setCounter((prevCounter) => (prevCounter + 1) % slides.length);
  };

  // Handle the sliding functionality
  const slideImage = () => {
    slidesRef.current.forEach((slide) => {
      if (slide) {
        slide.style.transform = `translateX(-${(counter % slides.length) * 100}%)`;
      }
    });
  };

  // Re-run the slideImage function every time `counter` changes
  useEffect(() => {
    slideImage();
  }, [counter]);
  const infiniteScrollFactor = slides.length * 2;
  return (
    <div className="mb-32 mt-24 relative">
      <img className="absolute hidden md:inline md:-top-[3px] md:left-[12px]" src="/images/beeUp.png" alt="" />
      <div className="flex flex-col items-center mb-14">
        <h1 className="text-4xl text-center">How we developed Oosh!</h1>
        <p className="text-xs max-w-[644px] px-4 mt-6 text-center">Our product was developed by an eye doctor with over 20 years of experience treating dry eyes, eye inflammation, and other eye disorders. She was dissatisfied with the products on the market and developed the wash and the brush</p>
      </div>
      <div className="flex relative overflow-hidden" >
        {slides.map((slide, index) => (
          <div
            className="slide min-w-[290px] min-h-[260px] duration-1000 ease-in-out "
            key={index}
            ref={(el) => (slidesRef.current[index] = el)} // Store each slide in the ref
          >
            <img src={slide} alt={`Slide ${index + 1}`} className="absolute w-full h-full p-3 borederd " />
          </div>
        ))}
        {/* <img src="/images/honey.png" className="absolute -bottom-[202px] right-[207px]" alt="" /> */}
      </div>
      <div className="text-center center mt-4 mb-4">
      <img src="/images/honey.png" className="absolute hidden lg:inline lg:-bottom-[144px] lg:right-[220px]" alt="" />

        <button className="image w-12 h-11 px-4 py-2 mr-2 border border-[#999090] rounded" onClick={goPrev}>
          <img src="/images/prev.png" alt="" />
        </button>
        <button className="image w-12 h-11 px-4 py-2  ml-2 border border-[#999090] rounded" onClick={goNext}>
          <img src="/images/next.png" alt="" />

        </button>
      </div>
    </div>
  );
}

export default Slider;
