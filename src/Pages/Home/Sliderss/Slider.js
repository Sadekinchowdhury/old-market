import React from 'react';

import img1 from '../.././../assets/banner1.webp'
import img2 from '../.././../assets/banner2.webp'
import img3 from '../.././../assets/banner3.jpg'
import img4 from '../.././../assets/banner4.jpg'
import SliderItem from './SliderItem';



const Sliders = () => {

    const slider = [
        {
            image: img1,
            id: 1,
            prev: 4,
            next: 2
        },
        {
            image: img2,
            id: 2,
            prev: 1,
            next: 3
        },
        {
            image: img3,
            id: 3,
            prev: 2,
            next: 4
        },
        {
            image: img4,
            id: 4,
            prev: 3,
            next: 1
        }
    ]
    return (
        <div className="carousel mt-5">
            {
                slider.map(slide => <SliderItem
                    key={slide.id}
                    slide={slide}
                >

                </SliderItem>
                )
            }

        </div>
    );
};

export default Sliders;