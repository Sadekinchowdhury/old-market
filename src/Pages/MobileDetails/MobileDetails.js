import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaShoppingBasket, FaShoppingCart, FaStar } from 'react-icons/fa';
import { motion, } from 'framer-motion';

import { AiOutlineMinus, AiOutlinePlus, } from 'react-icons/ai';
import { Input, Rate } from 'antd';

import ProductModal from './ProductModal';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider';
import Review from './Review';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../ShopingCart/Spinner';
import Reviewform from './Reviewform';


const MobileDetails = () => {
    const { user, users, notiNumber, setNotiNumber, } = useContext(AuthContext)

    const [booking, setBooking] = useState(null)

    const [cart, setCart] = useState(1)

    const [cartAdd, setCartAdd] = useState(false)




    React.useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000); // Simulating a 3-second loading process
        return () => clearTimeout(timer);
    }, []);





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
    const update = {
        cart, cartAdd,
        bookingEmail: user?.email,
        MobileDetails
    }
    const handlAddCart = () => {

        setNotiNumber(notiNumber + 1)

        setCartAdd(true)

        // fetch('https://old-server.vercel.app/cart', {
        //     method: "POST",
        //     headers: {
        //         'content-type': 'application/json',
        //     },
        //     body: JSON.stringify(update)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         

        //         if (data.acknowledged) {

        //             toast.success('congratulations you are successfully cart add ')

        //         }

        //     })

        fetch('https://old-server.vercel.app/booking', {
            method: 'POST',

            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(update)

        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {

                    toast.success('congratulations you are successfully cart add ')


                }
                else {
                    toast.error(data.message)
                }


            })

    }




    const date = new Date()
    const [loading, setLoading] = React.useState(true);



    // const [userreview, setUserReview] = useState([])




    // useEffect(() => {
    //     fetch(`http://localhost:5000/review/${_id}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setUserReview(data)
    //             setLoading(false)
    //         })


    // }, [_id])


    const { data: userreview = [], refetch } = useQuery({
        queryKey: ['review'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/review/${_id}`, {
                headers: {
                    'content-type': 'application/json',

                }
            })
            const data = await res.json()

            return data;
        }
    })

    console.log(MobileDetails)

    return (
        <motion.div className=''>


            <div className='flex items-center py-20 flex-col lg:flex-row  gap-10 w-11/12 mx-auto '>
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className='p-3 lg:w-7/12   w-full'>

                    <div className='flex pb-6 gap-3 items-center'>
                        <img className='w-16 h-16 rounded-full border border-gray-300' src={MobileDetails?.sellerImage} alt="" />
                        <p className='text-xl font-semibold'>{MobileDetails.sellername}</p>
                    </div>


                    <div className='bg-gray-300 py-10 flex justify-center items-center'>
                        <img className='w-3/5 mx-auto h-[300px]' src={picture} alt="" />
                    </div>
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
                        <p className='text-[17px]'>{usedtime}</p>
                        <p className='text-[17px]'>{location}</p>
                        <p className='text-[17px]'>{postedtime}</p>
                        <p className='pb-3 text-[17px]'>{description}</p>
                        <p className=' text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur magni provident quae tenetur modi deleniti ipsum dignissimos repudiandae vero aliquid. Vero cupiditate temporibus incidunt. Illum excepturi dolor eius provident molestiae!</p>

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



                        <Link onClick={handlAddCart} className='px-5 py-3 bg-black text-white font-semibold hover:text-black hover:bg-gray-300 ease-in-out  transition-colors duration-200 shadow-2xl hover:border-[1px] hover:border-gray-500 rounded-sm flex items-center gap-2'>
                            <FaShoppingCart />  add to cart
                        </Link>
                    </div>
                </motion.div>
            </div>
            <div className='w-11/12 mx-auto  flex flex-col lg:flex-row gap-11'>

                <Reviewform refetch={refetch} MobileDetails={MobileDetails} />

                {/* <div className='w-full lg:w-5/12'>
                        <div>
                            <p className='text-[16px]'>Ratting</p>


                        </div>
                        <div>
                            <div className='flex'>

                                {/* Displaying stars for user selection */}
                {/* {[1, 2, 3, 4, 5].map((star) => (
                                    <span
                                        key={star}
                                        className="text-4xl cursor-pointer "
                                        onClick={() => handleStarClick(star)}
                                    >
                                        {star <= rating ? <FaStar color='yellow' /> : <FaStar />}
                                    </span>
                                ))}
                            </div>

                        </div>
                        <form onSubmit={handlReview} action="">
                            <div className="form-control  gap-5 py-4">
                                <div>
                                    <label className='text-[16px]'>Review</label>

                                    <Input.TextArea name={inputvalue} className='h-32 ' placeholder="Review" allowClear onChange={handleTextareaChange} />

                                </div>
                                <div >
                                    <label className='text-[16px]' htmlFor="">Name</label>
                                    <Input name='name' placeholder="Name" className='py-2' allowClear onChange={onchange} />
                                </div>
                                <div>
                                    <label className='text-[16px]' htmlFor="">Email</label>
                                    <Input name='email' className='py-2' placeholder="Email" allowClear onChange={onchange} />
                                </div>


                            </div>
                            <div className='py-5'>

                                <input className='px-5 py-3 bg-black text-white font-semibold hover:text-black hover:bg-gray-300 ease-in-out  transition-colors duration-200 shadow-2xl hover:border-[1px] hover:border-gray-500 rounded-sm  gap-2' type="submit" />
                            </div>
                        </form>

                    // </div> */}


                {

                    <div className='w-full  lg:w-7/12 '>
                        {
                            userreview.map(review =>
                                <Review
                                    review={review}
                                    key={review._id}
                                    loading={loading}
                                    refetch={refetch}
                                />
                            )

                        }
                    </div>
                }

            </div>

            {
                <ProductModal cart={cart} details={MobileDetails} />
            }
        </motion.div>
    );
};

export default MobileDetails;