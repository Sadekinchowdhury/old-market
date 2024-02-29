import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const CompanyLogo = () => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show one slide at a time on mobile devices
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const review = [
    { img: "https://i.ibb.co/XkFpZCv/ge-logo-removebg-preview.png" },
    { img: "https://i.ibb.co/SPQYnnj/download-5-removebg-preview-3.png" },
    { img: "https://i.ibb.co/581gNdy/Rolex-logo-2021-removebg-preview.png" },
    { img: "https://i.ibb.co/xzSmT5n/images-1-removebg-preview.png" },
    { img: "https://i.ibb.co/df1KVyn/images-9-removebg-preview.png" },
    { img: "https://i.ibb.co/fvKqPsS/images-2-removebg-preview-2.png" },
  ];

  return (
    <div className="py-20 max-w-[1200px]  px-[20px] mx-auto">
      <div className="pb-8 mx-auto">
        <h2 className="text-2xl font-poppins font-semibold">Top Brands</h2>
        <hr className="border border-black w-1/4 my-2" />
      </div>
      <Slider {...settings}>
        {review.map((rev, index) => (
          <div key={index} className="flex-col-1 gap-10">
            <ul>
              <li>
                <img
                  className="h-20 w-1/2 object-contain mx-auto"
                  src={rev.img}
                  alt=""
                />
              </li>
            </ul>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CompanyLogo;
