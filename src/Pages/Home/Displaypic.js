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


                </Swiper>
            </>
        </div>
    );
}
export default Displaypic;
