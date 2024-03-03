import React from "react";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <div className="w-full bg-black">
      <div className=" max-w-[1200px]  px-[20px] mx-auto lg:h-[400px] flex justify-between items-center flex-col lg:flex-row gap-10  py-4">
        <div className="flex  justify-around items-center">
          <div>
            <p className="text-xl font-semibold text-white py-3 lg:text-left text-center">
              20% Discount now
            </p>
            <h1 className="text-4xl pb-4 lg:text-6xl font-semibold font-poppins text-white lg:text-left text-center">
              Osaka Watch{" "}
            </h1>
            <div className="text-center flex lg:flex-none lg:justify-start      items-center justify-center">
              <Link
                to="/products"
                className="bg-[#ED9847] hover:bg-[#B08969] transition duration-300 py-4 text-[18px] text-white px-10"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <img
            className="w-full hover:scale-105 hover:left-10 transition duration-300 h-40  lg:h-64"
            src="https://i.ibb.co/1s1pkHg/R-removebg-preview.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
