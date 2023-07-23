import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Displaypic = () => {
    return (

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

                <SwiperSlide className="">
                    {/* <div className="item-center   content-center lg:p-12  bg-black">
                        <div className="grid grid-cols-1 p-3 lg:p-0 lg:grid-cols-2 m-4">
                            <div className="lg:p-10 p-5">
                                <p className="text-2xl font-bold">Yahooo ! Just for you</p>
                                <p><strong className="mr-3">Discount:</strong>60%</p>
                                <p className="text-xl font-semibold">Book now favourite</p>

                                <p>30-50% discount soon</p>
                            </div>
                            <div className="">
                                <img className="h-full w-full" src="https://i.ibb.co/jf8LVv1/images-7.jpg" alt="" />
                            </div>
                        </div>

                    </div> */}
                    <img style={{ width: "100%", height: "100%", objectFit: "cover" }} className="full-width-height" src="https://img.freepik.com/free-vector/flat-horizontal-sale-banner-template-with-photo_23-2149000923.jpg?w=740&t=st=1689902933~exp=1689903533~hmac=8ab7f80ae91d2999f92b44300002b33238da513450ee88c37ff05b6c4475afeb" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item-center  content-center lg:p-12 ">
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

    );
}
export default Displaypic;
