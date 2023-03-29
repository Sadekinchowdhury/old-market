import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Displaypic = () => {
    return (
        <div className="top-0">
            <>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="item-center  content-center lg:p-12  bg-white">
                            <div className="grid grid-cols-1 p-3 lg:p-0 lg:grid-cols-2 m-4">
                                <div className="lg:p-10 p-5">
                                    <p className="text-2xl font-bold">Yahooo ! Just for you</p>
                                    <p><strong className="mr-3">Discount:</strong>60%</p>
                                    <p className="text-xl font-semibold">Book now favourite</p>

                                    <p>30-50% discount soon</p>
                                </div>
                                <div className="">
                                    <img className="" src="https://i.ibb.co/SwG7n2Q/images-8.jpg" alt="" />
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item-center  content-center lg:p-12  bg-white">
                            <div className="grid grid-cols-1 p-3 lg:p-0 lg:grid-cols-2 m-4">
                                <div className="lg:p-10 p-5">
                                    <p className="text-2xl font-bold">Yahooo ! Just for you</p>
                                    <p><strong className="mr-3">Discount:</strong>60%</p>
                                    <p className="text-xl font-semibold">Book now favourite</p>

                                    <p>30-50% discount soon</p>
                                </div>
                                <div className="">
                                    <img className="" src="https://i.ibb.co/jf8LVv1/images-7.jpg" alt="" />
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item-center  content-center lg:p-12  bg-white">
                            <div className="grid grid-cols-1 p-3 lg:p-0 lg:grid-cols-2 m-4">
                                <div className="lg:p-10 p-5">
                                    <p className="text-2xl font-bold">Yahooo ! Just for you</p>
                                    <p><strong className="mr-3">Discount:</strong>60%</p>
                                    <p className="text-xl font-semibold">Book now favourite</p>

                                    <p>30-50% discount soon</p>
                                </div>
                                <div className="">
                                    <img className="" src="https://i.ibb.co/SwG7n2Q/images-8.jpg" alt="" />
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item-center  content-center lg:p-12  bg-white">
                            <div className="grid grid-cols-1 p-3 lg:p-0 lg:grid-cols-2 m-4">
                                <div className="lg:p-10 p-5">
                                    <p className="text-2xl font-bold">Yahooo ! Just for you</p>
                                    <p><strong className="mr-3">Discount:</strong>60%</p>
                                    <p className="text-xl font-semibold">Book now favourite</p>

                                    <p>30-50% discount soon</p>
                                </div>
                                <div className="">
                                    <img className="" src="https://i.ibb.co/SwG7n2Q/images-8.jpg" alt="" />
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>

                    {/* <SwiperSlide>

                        <div className="item-center content-center  lg:p-12 bg-white">
                            <div className="grid grid-cols-2 text-center justify-center">
                                <div className="">
                                    <p className="text-2xl font-bold">Yahooo ! Just for you</p>
                                    <p><strong className="mr-3">Discount:</strong>60%</p>
                                    <p className="text-xl font-semibold">Book now favourite</p>
                                    <p>Why late? </p>
                                </div>
                                <div>
                                    <img src="https://i.ibb.co/cQR4fgr/download-9.jpg" alt="" />
                                </div>
                            </div>

                        </div>

                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="https://i.ibb.co/jf8LVv1/images-7.jpg" alt="" /> </SwiperSlide>
                    <SwiperSlide>


                        Slide 4</SwiperSlide> */}

                </Swiper>
            </>
        </div>
    );
}
export default Displaypic;
// #app {
//   height: 100%;
// }
// html,
// body {
//   position: relative;
//   height: 100%;
// }

// body {
//   background: #eee;
//   font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
//   font-size: 14px;
//   color: #000;
//   margin: 0;
//   padding: 0;
// }

// .swiper {
//   width: 100%;
//   height: 100%;
// }

// .swiper-slide {
//   text-align: center;
//   font-size: 18px;
//   background: #fff;

//   /* Center slide text vertically */
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// .swiper-slide img {
//   display: block;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// }

// .swiper {
//   width: 100%;
//   height: 300px;
//   margin: 20px auto;
// }
// .append-buttons {
//   text-align: center;
//   margin-top: 20px;
// }

// .append-buttons button {
//   display: inline-block;
//   cursor: pointer;
//   border: 1px solid #007aff;
//   color: #007aff;
//   text-decoration: none;
//   padding: 4px 10px;
//   border-radius: 4px;
//   margin: 0 10px;
//   font-size: 13px;
// }
// 