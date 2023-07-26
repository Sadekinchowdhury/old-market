import { Checkbox } from 'antd';
import React from 'react';
import { AiFillDelete, AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ShopingCartDetails = ({ handleDecrease, handleIncrease, book, cart }) => {
    return (
        <div className='w-10/12 mx-auto'>
            <div className='flex items-center justify-evenly p-4 gap-10'>
                <div className='flex w-6/12 gap-4'>
                    <Checkbox />
                    <img className='w-20 h-20' src="" alt="" />
                </div>
                <div>
                    <h1 className='text-[17px] text-green-700 font-semibold' >$2345</h1>
                    <h1 className='line-through text-[15px] font-semibold'>$44555</h1>
                    <div>
                        <AiFillDelete className='hover:text-red-700 cursor-pointer' size={30} />
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
                <div>
                    <td>
                        {
                            book.price && !book.paid && <Link to={`/dashboard/payment/${book._id}`}><button className='btn btn-primary px-5'>
                                pay
                            </button></Link>
                        }
                        {
                            book.price && book.paid && <button
                                className='btn btn-primary btn-disabled text-green-500'>
                                Paid
                            </button>
                        }
                    </td>
                </div>
            </div>
        </div>
    );
};

export default ShopingCartDetails;