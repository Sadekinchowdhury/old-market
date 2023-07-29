import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageBanner = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        // Use fade effect for auto-fading
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true, // Show navigation arrows
        // Pause autoplay on hover
        swipeToSlide: true, // Allow swiping to slide
        adaptiveHeight: true, // Adjust the height based on the current slide
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                },
            },
        ],
    };

    const images = [
        'https://img.freepik.com/premium-vector/online-shopping-background-illustrated-with-credit-card-3d-mobile-phone_269039-171.jpg?w=740',
        'https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg?w=740&t=st=1690623418~exp=1690624018~hmac=8f881d1954b086bbb0ac9abd9bbfd5767e36089bca838ae15b1932a7cea23b57',
        'https://img.freepik.com/free-vector/black-friday-sale-shopping-cart-banner-with-text-space_1017-28049.jpg?w=740&t=st=1690623689~exp=1690624289~hmac=8b3ff0d5b3d00875a9cdbe6e8eb8ba643db914c6866518624bd38f091f0df83e',
        'https://img.freepik.com/free-vector/online-shopping-landing-page_33099-1725.jpg?w=740&t=st=1690623757~exp=1690624357~hmac=5d592f7cfaae126692a1659e024a9ff45082f86e840bc43e8323dc6c96e1ff5b',
        // Add more image URLs here
    ];

    return (
        <div>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img className='w-full h-[250px] lg:h-[400px]' src={image} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageBanner;
