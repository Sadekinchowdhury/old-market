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
import NewCategory from './NewCategory/NewCategory';
import CategorySlide from './CategorySlide';
import HeroBanner from './HeroBanner/HeroBanner';
import CompanyLogo from './CompanyLogo/CompanyLogo';
import BannerSlider from './BannerSlider';


const Home = () => {
    return (
        <motion.div className='bg-[#FFFFFF] overflow-hidden w-11/12 mx-auto'>

            {/* <motion.div className='flex  flex-col lg:flex-row w-11/12 gap-5 h-auto lg:h-[400px] items-center  my-4 mx-auto'>

                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0, transition: { duration: 3 } }}
                    exit={{ opacity: 0, y: 50, transition: { duration: 3 } }}
                    className='w-full  h-full  rounded-md shadow-2xl lg:w-8/12'>
                     <ImageBanner />
                </motion.div>

                <motion.div className='w-full h-full lg:w-4/12'>
                    <SideBanner />
                </motion.div>

            </motion.div> */}
            <BannerSlider />
            <motion.div className='w-full py-12   lg:w-7/12 mx-auto'>
                <Shopings></Shopings>
            </motion.div>

            <motion.div initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }} className='w-11/12 mx-auto'>
                <Product />
            </motion.div>

            <div>
                <CategorySlide />
            </div>
            <motion.div

                transition={{ duration: 0.5 }}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 3 } }}
                exit={{ opacity: 0, y: 50, transition: { duration: 3 } }}

            >
                <HeroBanner />
            </motion.div>
            <div className='w-full'>
                <CompanyLogo />
            </div>

            <Addvirtize></Addvirtize>
            {/* <Exptra></Exptra> */}


        </motion.div>
    );
};

export default Home;