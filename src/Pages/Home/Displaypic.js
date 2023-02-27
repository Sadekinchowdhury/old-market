import React from 'react';
import displayimg from '../../assets/displaymobile.webp'
const Displaypic = () => {
    return (


        <div className='m-4 p-10'>
            <div className='grid grid-cols-1 w-2/3 mx-auto lg:grid-cols-2 items-center'>
                {/* <div className="p-10">
                    <div className="">
                        <img src={displayimg} className="w-2/5 rounded-lg shadow-2xl" alt='' />
                        <div className=''>
                            <h1 className=" text-5xl font-bold"> Choose Your favourite Brand </h1>
                            <p className="py-6">
                                You can buy less money but good products.

                            </p>
                            <button className="btn btn-primary">See more</button>
                        </div>
                    </div>
                </div> */}
                <div className='w-2/3'>
                    <div className="carousel mx-auto rounded-3xl">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img src="https://i.ibb.co/N6DLV4k/download-1.jpg" alt='' className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src="https://i.ibb.co/7bxTwr7/download-2.jpg" alt='' className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img src="https://i.ibb.co/RT9Nxzh/download-3.jpg" alt='' className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                            <img src="https://i.ibb.co/CsgNYMd/download-4.jpg" alt='' className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='lg:w-96'>
                    <div className="card bg-base-100 shadow-xl image-full">
                        <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title"></h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div>
                    <img src="https://i.ibb.co/GWhGGmp/young-man-showing-his-brand-new-smart-phone-isolated-white-163897508-removebg-preview.png" alt="" />
                </div>
            </div>
        </div>



    );
};

export default Displaypic;