import { HeartOutlined } from '@ant-design/icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const Product = () => {


    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    const [open, setOpen] = useState(false)

    const hovemouse = () => {
        setOpen(!open)
    }

    return (

        <motion.div>

            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 3 } }}
                exit={{ opacity: 0, y: 50, transition: { duration: 3 } }}


                className='grid grid-cols-1 lg:grid-cols-4 gap-12  '

            >
                {
                    products.slice(0, 8).map(product => <Link to={`/card_details/${product._id}`} className='relative   hover:scale-105   transition hover:opacity-80 duration-500 hover:shadow-2xl hover:border-b-blue-700 hover:border-r-red-800   rounded-md  ease-in-out'

                    >

                        <HeartOutlined className='absolute top-2 text-yellow-600 right-2' />
                        <div className='py-20 bg-[#F3F3F3]'>
                            <img className='h-[120px]  w-1/2 mx-auto ' src={product.picture} alt="" />
                        </div>

                        <motion.div className=''>
                            <span className='text-[12px]  pl-3'>{product.category}</span>
                            <motion.div className='flex flex-col 
                            items-center text-center py-4'>
                                <h className='font-semibold text-[18px]'>{product.name}</h>
                                <motion.div className='flex gap-2'>
                                    <p className='text-xl line-through font-semibold'>${product.price}</p>
                                    <p className='text-xl  font-semibold'>${product.price}</p>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </Link>)
                }
            </motion.div>
        </motion.div>

    );
};

export default Product;