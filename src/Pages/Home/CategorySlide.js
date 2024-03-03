import { useQuery } from "@tanstack/react-query";
import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const CategorySlide = () => {
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
    slidesToShow: 5,
    swipeToSlide: true,
    afterChange: function (index) {},
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "10px",
        },
      },
    ],
  };

  const { data: categoryProduct = [], refetch } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("https://old-server.vercel.app/categoris");
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="max-w-[1200px]  px-[20px] mx-auto py-14">
      <h2 className="text-2xl font-poppins font-semibold">
        Shoping By Category
      </h2>
      <hr className="border border-black w-1/4 my-2" />
      <div className="slider-container py-10 relative">
        <button
          className="slider-prev bg-transparent border-none text-2xl text-gray-700 absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
          onClick={handlePrevSlide}
        >
          <FaChevronLeft />
        </button>
        <Slider {...settings} ref={sliderRef}>
          {categoryProduct.map((category, index) => (
            <Link to={`/category/${category._id}`} key={index}>
              <img
                className="min-h-[140px] max-h-[140px] max-w-[140px] min-w-[140px] object-cover mx-auto"
                src={category?.picture}
                alt={`Item ${index + 1}`}
              />
              <h2 className=" text-black text-2xl font-semibold text-center py-5 ">
                {category?.name}
              </h2>
            </Link>
          ))}
        </Slider>
        <button
          className="slider-next bg-transparent border-none text-2xl text-gray-700 absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
          onClick={handleNextSlide}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default CategorySlide;
