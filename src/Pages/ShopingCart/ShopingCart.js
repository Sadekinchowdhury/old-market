import React, { useState } from 'react';
import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { Checkbox } from 'antd';

const ShopingCart = () => {

    const [cart, setCart] = useState(1)

    const handleIncrease = () => {
        setCart(cart + 1)
    };

    const handleDecrease = () => {
        if (cart >= 2) {
            setCart(cart - 1)
        }
    };
    return (
        <div className='h-screen'>
            <div className='w-10/12 mx-auto'>


                <div className='flex items-center py-10 justify-between p-4'>
                    <div className='flex gap-4 items-center'>
                        <Checkbox />
                        Select All cart
                    </div>
                    <div className='flex gap-3 items-center'>
                        Delete
                        <AiOutlineDelete size={30} />
                    </div>
                </div>




                <div className=' flex items-center justify-evenly p-4 gap-10'>
                    <div className='flex w-6/12 gap-4'>
                        <Checkbox />
                        <img className='w-20 h-20' src="" alt="" />
                    </div>
                    <div>
                        <h1 className='text-xl font-semibold' >$2345</h1>
                        <h1 className='line-through text-xl font-semibold'>$44555</h1>
                        <div>
                            <AiOutlineDelete size={30} />
                        </div>
                    </div>
                    <div>

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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopingCart;