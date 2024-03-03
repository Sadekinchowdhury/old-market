import { motion } from "framer-motion";
import React, { useContext, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { AuthContext } from "../../Context/AuthProvider";
import "./BannerSlider.css";

const BannerSlider = () => {
  const { user } = useContext(AuthContext);
  const sliderRef = useRef(null);

  const handlePrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextSlide = () => {
    sliderRef.current.slickNext();
  };

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    autoplaySpeed: 2000,
    fade: true,
    swipeToSlide: true,
    afterChange: function (index) {},
  };

  const sliderData = [
    {
      discount: "Discount 50%",
      title: "discover the world",
      image:
        "https://i.postimg.cc/jqMfgSCn/657e399a69e188fb194c3804f33fb67d-380x380-removebg-preview.png",
    },
    {
      discount: "Discount 30%",
      title: "discover the world",
      image: "https://i.postimg.cc/C5xqhWrK/images-8-removebg-preview.png",
    },
    {
      discount: "Discount 80%",
      title: "discover the world",
      image: "https://i.postimg.cc/s25SwPZ3/download-13-removebg-preview.png",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
      className="banner-container overflow-hidden py-[100px] pb-[40px] md:py-[200px] px-[20px]"
    >
      <button
        className="slider-prev p-2 bg-gray-400 rounded-full hover:bg-gray-300 hover:text-white  bg-transparent border-none text-2xl text-gray-700 absolute left-3 top-1/2 transform -translate-y-1/2 z-10"
        onClick={handlePrevSlide}
      >
        <FaChevronLeft color="black" />
      </button>
      <div className="max-w-[1200px] md:px-[34px] mx-auto">
        <Slider {...settings} className="z-0" dots={true} ref={sliderRef}>
          {sliderData?.map((item, i) => (
            <div key={i} className="banner-content">
              <div className="">
                <p className="text-[20px] leading-5 font-semibold ">
                  {item.discount}
                </p>
                <h1 className=" lg:text-[70px] md:leading-[110px] leading-[60px] text-[34px] text-center  lg:text-left   font-poppins  font-semibold">
                  {item.title}
                </h1>
                {user ? (
                  <Link
                    to="/products"
                    className="bg-[#ED9847] relative z-10 leading-8 inline-block hover:bg-[#B08969] transition duration-300 py-4 text-[18px] text-white px-10 uppercase"
                  >
                    Shop Now
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    className="bg-[#ED9847] leading-4 inline-block hover:bg-[#B08969] transition duration-300 uppercase py-4 text-[18px] text-white px-10"
                  >
                    Shop Now
                  </Link>
                )}
              </div>
              <div>
                <img
                  className="max-w-[200px] block h-[200px]"
                  src={item.image}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <button
        className="slider-next p-2 bg-gray-400 rounded-full hover:bg-gray-300 hover:text-white  bg-transparent border-none text-2xl text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 z-10"
        onClick={handleNextSlide}
      >
        <FaChevronRight color="black" />
      </button>
    </motion.div>
  );
};

export default BannerSlider;
