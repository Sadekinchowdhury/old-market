import React from 'react';
import { motion } from 'framer-motion';

const SideBanner = () => {
    return (
        <motion.div className='gap-6  flex-col  flex'>
            <motion.div
                animate={{

                    scale: [0.9, 0.95, 0.9],
                    boxShadow: [
                        '0 5px 10px rgba(0, 0, 0, 0.2)',
                        '0 10px 20px rgba(0, 0, 0, 0.3)',
                        '0 5px 10px rgba(0, 0, 0, 0.2)',
                    ],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                    ease: 'easeInOut', // Optional easing function for smoother animation
                }}

            >
                <img className='w-11/12 hover:scale-105 transition duration-300 h-[190px]  animate-fade-in-out  mx-auto' src="https://img.freepik.com/free-vector/black-friday-sale-banner-red-black-social-media-business-purpose-free-vector_1340-22501.jpg?w=740&t=st=1689914465~exp=1689915065~hmac=a2cc7684debbab98874c36300f160d4c803c29abc3ea2d8252a9df173f44d27f" alt="" />
            </motion.div>
            <motion.div
                animate={{
                    scale: [0.9, 0.95, 0.9],
                    boxShadow: [
                        '0 5px 10px rgba(0, 0, 0, 0.2)',
                        '0 10px 20px rgba(0, 0, 0, 0.3)',
                        '0 5px 10px rgba(0, 0, 0, 0.2)',
                    ],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                    ease: 'easeInOut', // Optional easing function for smoother animation
                }}

                className=''>
                <img className='w-11/12 hover:scale-105 transition duration-300  h-[190px] mx-auto' src="https://img.freepik.com/free-vector/season-sale_62951-24.jpg?w=740&t=st=1689914360~exp=1689914960~hmac=5f334675a8d982fe79664eadda65ae1b7ef352650e4d10ec2189a2c9acbe61dd" alt="" />
            </motion.div>

        </motion.div>
    );
};

export default SideBanner;