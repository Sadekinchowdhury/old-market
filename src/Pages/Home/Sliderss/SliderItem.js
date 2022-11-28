import React from 'react';
import './Slider.css'

const SliderItem = ({ slide }) => {
    const { image, id, prev, next } = slide

    return (
        <div className="carousel-item relative mx-auto mb-0 w-full">
            <div id={`slide${id}`} className="carousel-item relative w-full h-1/2 ">
                <div id='carosels-img' className=''>
                    < img src={image} alt='' className='h-1/2 w-full' />
                </div>

                <div className="absolute flex  transform -translate-y-1/2 top-1/3 w-1/3 left-24 ">
                    <h1 className='text-4xl text-white font-bold' >Your favourite phone </h1>
                </div>


                <div className="absolute flex  transform -translate-y-1/2 bottom-1/4  w-1/3 left-24 ">
                    <button className="btn btn-outline btn-success mr-10  px-7">See more</button>


                </div>
                <div className="absolute flex  transform -translate-y-1/2   right-5 bottom-0">
                    <a href={`#slide${prev}`} className="btn btn-circle mr-2 ">❮</a>
                    <a href={`#slide${next}`} className="btn btn-circle">❯</a>
                </div>


            </div >

        </div >
    );
};

export default SliderItem;