import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaShoppingBasket, FaShoppingCart, FaStar } from 'react-icons/fa';
import { motion, useTime } from 'framer-motion';
import { useQuery } from 'react-query';
import { AiOutlineArrowLeft, AiOutlineLeft, AiOutlineMinus, AiOutlinePlus, AiOutlineRight } from 'react-icons/ai';
import { Input, Rate } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import ProductModal from './ProductModal';

const MobileDetails = () => {
    const [booking, setBooking] = useState(null)
    const [cart, setCart] = useState(1)
    const MobileDetails = useLoaderData()
    const { description, location, name, originalprice, picture, postedtime, price, sellername, usedtime, _id } = MobileDetails

    const handleIncrease = () => {
        setCart(cart + 1)
    };

    const handleDecrease = () => {
        if (cart >= 2) {
            setCart(cart - 1)
        }
    };


    return (
        <motion.div className=''>
            <div>
                <motion.div
                    className='flex items-center   flex-col lg:flex-row  gap-10 w-10/12 mx-auto py-20 '>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className='p-3 lg:w-7/12 bg-gray-300 flex items-center justify-center  w-full'>
                        <img className=' h-[300px]' src={picture} alt="" />


                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className='p-3 lg:w-5/12 w-full'>
                        <h1 className='text-4xl font-bold'>
                            {name}
                        </h1>
                        <span className='text-xl py-4 font-semibold flex gap-4'><p className='line-through'>{originalprice}</p><p className=''>${price * cart}</p> </span>

                        <div className='py-6 '>
                            <p>{usedtime}</p>
                            <p>{location}</p>
                            <p>{postedtime}</p>
                            <p className='pb-3'>{description}</p>
                            <p className=' text-[18px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur magni provident quae tenetur modi deleniti ipsum dignissimos repudiandae vero aliquid. Vero cupiditate temporibus incidunt. Illum excepturi dolor eius provident molestiae!</p>

                        </div>

                        <motion.div className='flex flex-col lg:flex-row items-center gap-5'>
                            <div className='relative'>
                                <input placeholder='Quantity' className='py-3  px-5 p-2 border border-gray-400' type="text" />
                                <div className='flex items-center right-10 top-1/3  absolute gap-3'>
                                    <AiOutlineMinus onClick={handleDecrease} className='cursor-pointer' size={18} />
                                    <p className='font-semibold'>{cart}</p>
                                    <AiOutlinePlus onClick={handleIncrease} className='cursor-pointer' size={18} />
                                </div>
                            </div>
                        </motion.div>
                        <div className='flex flex-col py-4 lg:flex-row items-center gap-5'>
                            {/* <Link className='px-5 py-3 bg-orange-400 text-black font-semibold hover:text-black hover:bg-gray-300 ease-in-out  transition-colors duration-200 shadow-2xl hover:border-[1px] hover:border-gray-500 rounded-sm flex items-center gap-2'>

                            </Link> */}

                            <label className='px-5 py-3 bg-orange-400 text-black font-semibold hover:text-black hover:bg-gray-300 ease-in-out  transition-colors duration-200 shadow-2xl hover:border-[1px] hover:border-gray-500 rounded-sm flex items-center gap-2 cursor-pointer' htmlFor="booking-modal" > <FaShoppingBasket />  buy now</label>



                            <Link className='px-5 py-3 bg-black text-white font-semibold hover:text-black hover:bg-gray-300 ease-in-out  transition-colors duration-200 shadow-2xl hover:border-[1px] hover:border-gray-500 rounded-sm flex items-center gap-2'>
                                <FaShoppingCart />  add to cart
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>
                <div className='w-11/12 mx-auto py-10'>

                    <div>
                        <p className='text-[16px]'>Ratting</p>
                        <Rate />

                    </div>
                    <div>

                        <div className="form-control lg:w-5/12 w-full gap-5 py-4">
                            <div>
                                <label className='text-[16px]'  >
                                    Review

                                </label>
                                <TextArea className='h-32 ' placeholder="Review" allowClear onChange={onchange} />

                            </div>
                            <div >
                                <label className='text-[16px]' htmlFor="">Name</label>
                                <Input placeholder="Name" className='py-2' allowClear onChange={onchange} />
                            </div>
                            <div>
                                <label className='text-[16px]' htmlFor="">Email</label>
                                <Input className='py-2' placeholder="Email" allowClear onChange={onchange} />
                            </div>


                        </div>
                        <div className='py-5'>
                            <Link className='px-5 py-3 bg-black text-white font-semibold hover:text-black hover:bg-gray-300 ease-in-out  transition-colors duration-200 shadow-2xl hover:border-[1px] hover:border-gray-500 rounded-sm  gap-2'>
                                Submit
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
            {
                <ProductModal cart={cart} details={MobileDetails} />
            }
        </motion.div>
    );
};

export default MobileDetails;