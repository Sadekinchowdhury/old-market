import { HeartOutlined } from '@ant-design/icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';


const Product = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    console.log(data)
    const [whitlist, setWhitlist] = useState(false)
    const handlHover = () => {
        setWhitlist(!whitlist)
    }
    return (

        <motion.div className=''>

            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 3 } }}
                exit={{ opacity: 0, y: 50, transition: { duration: 3 } }}


                className='grid grid-cols-1 lg:grid-cols-4 gap-4  '>
                {
                    data.slice(0, 8).map(product => <motion.div className='p-3 relative border hover:scale-105 hover:bg-gray-200 transition hover:opacity-80 duration-500 hover:shadow-2xl hover:border-b-blue-700 hover:border-r-red-800 border-gray-300 rounded-md bg-white ease-in-out' >

                        <HeartOutlined className='absolute top-2 text-yellow-600 right-2' />
                        <img className='h-[100px] w-1/2 mx-auto py-6' src={product.image} alt="" />
                        <motion.div className='pt-7 '>
                            <span className='text-[12px]  pl-3'>{product.category}</span>
                            <motion.div className='flex flex-col 
                            items-center text-center'>
                                <h className='font-semibold '>{product.title}</h>
                                <motion.div className='flex gap-2'>
                                    <p className='text-xl line-through font-semibold'>${product.price}</p>
                                    <p className='text-xl  font-semibold'>${product.price}</p>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>)
                }
            </motion.div>
        </motion.div>

    );
};

export default Product;