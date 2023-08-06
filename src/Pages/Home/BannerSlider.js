import { useQuery } from '@tanstack/react-query';
import React, { useRef } from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaChevronLeft, FaChevronRight, FaArrowRight } from 'react-icons/fa';


const BannerSlider = () => {
    const sliderRef = useRef(null);

    const handlePrevSlide = () => {
        sliderRef.current.slickPrev();
    };

    const handleNextSlide = () => {
        sliderRef.current.slickNext();
    };

    const settings = {
        className: 'center',
        infinite: true,
        centerPadding: '60px',
        slidesToShow: 1,
        autoplaySpeed: 2000,
        fade: true,
        swipeToSlide: true,
        afterChange: function (index) {
            console.log(`Slider Changed to: ${index + 1}, background: #222; color: #bada55`);
        },

    };

    const Images = [
        'https://img.freepik.com/premium-vector/online-shopping-background-illustrated-with-credit-card-3d-mobile-phone_269039-171.jpg?w=740',
        'https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg?w=740&t=st=1690623418~exp=1690624018~hmac=8f881d1954b086bbb0ac9abd9bbfd5767e36089bca838ae15b1932a7cea23b57',
        'https://img.freepik.com/free-vector/black-friday-sale-shopping-cart-banner-with-text-space_1017-28049.jpg?w=740&t=st=1690623689~exp=1690624289~hmac=8b3ff0d5b3d00875a9cdbe6e8eb8ba643db914c6866518624bd38f091f0df83e',
        'https://img.freepik.com/free-vector/online-shopping-landing-page_33099-1725.jpg?w=740&t=st=1690623757~exp=1690624357~hmac=5d592f7cfaae126692a1659e024a9ff45082f86e840bc43e8323dc6c96e1ff5b',
    ]

    return (


        <div className='overflow-hidden'>
            <div className="slider-container top-0 h-[350px]  lg:h-[600px] relative">
                <button
                    className="slider-prev p-2 bg-gray-400 rounded-full hover:bg-gray-700 hover:text-white  bg-transparent border-none text-2xl text-gray-700 absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
                    onClick={handlePrevSlide}
                >
                    <FaChevronLeft />
                </button>
                <Slider {...settings} ref={sliderRef}>
                    {Images.map((category, index) => (
                        <img className='w-full h-[350px] lg:h-[600px]' src={category} alt="" />

                    ))}
                </Slider>
                <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black  to-transparent"></div>

                <div className='absolute lg:text-left  lg:bottom-1/3 bottom-0 lg:w-full  left-[18%]'>
                    <div className='hidden lg:block'>
                        <h1 className='text-white text-xl  inline-block lg:text-left lg:text-5xl font-poppins py-3 font-semibold'>
                            Discover Limitless

                        </h1>
                        <p className='text-white font-poppins font-bold text-sm lg:text-3xl'>
                            Shop Your Style Today!
                        </p>
                    </div>
                    <div className='hidden lg:block'>
                        <div className='py-10 flex  items-center justify-center lg:justify-start  lg:gap-7 gap-3'>
                            <button className="btn btn-outline btn-info rounded-full">Shop Now</button>
                            <button className="btn btn-outline btn-success rounded-full">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className='lg:hidden block absolute left-8 bottom-0'>
                    <div className='py-10 flex  items-center justify-center lg:justify-start  lg:gap-7 gap-3'>
                        <button className="btn btn-outline bg-black text-white rounded-full">Shop Now</button>
                        <button className="btn btn-outline btn-success rounded-full">Get Started</button>
                    </div>
                </div>


                <button
                    className="slider-next p-2 bg-gray-400 rounded-full hover:bg-gray-700 hover:text-white  bg-transparent border-none text-2xl text-gray-700 absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
                    onClick={handleNextSlide}
                >
                    <FaChevronRight />
                </button>
            </div>
        </div>

    );
};

export default BannerSlider;