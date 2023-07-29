import React from 'react';
import Shopings from '../../Shoping/Shopings';
import Addvirtize from '../AdvirtiseItem/Addvirtize';
import Category from './Category';
import Displaypic from './Displaypic';
import Exptra from './Exptra/Exptra';
import SideBanner from './SideBanner';
import Product from './Product';
import { motion } from 'framer-motion';
import ImageBanner from './HomeBanner';


const Home = () => {
    return (
        <motion.div className='bg-[#FFFFFF]'>

            <motion.div className='flex  flex-col lg:flex-row w-11/12 gap-5 h-auto lg:h-[400px] items-center  my-4 mx-auto'>

                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0, transition: { duration: 3 } }}
                    exit={{ opacity: 0, y: 50, transition: { duration: 3 } }}
                    className='w-full  h-full  rounded-md shadow-2xl lg:w-8/12'>
                    {/* <Displaypic />   <ImageBanner /> */}   <ImageBanner />
                </motion.div>

                <motion.div className='w-full h-full lg:w-4/12'>
                    <SideBanner />
                </motion.div>

            </motion.div>

            <motion.div className='py-10 w-10/12 mx-auto  gap-4 '>
                <motion.div className='w-full pt-6 pb-8 lg:w-8/12 mx-auto '>
                    <Shopings></Shopings>
                </motion.div>

                <motion.div className='py-6'>
                    <h1 className='text-xl font-bold'>Feature Product</h1>
                    <hr className='bg-black border-[1px] my-2 w-2/3 lg:w-1/5 border-black' />
                </motion.div>


                <Product className='w-full' />

            </motion.div>



            <motion.div>
                <Category></Category>
                {/* <FeaturProducts /> */}
            </motion.div>


            <Addvirtize></Addvirtize>
            <Exptra></Exptra>


        </motion.div>
    );
};

export default Home;