import React from 'react';
import Shopings from '../../Shoping/Shopings';
import Addvirtize from '../AdvirtiseItem/Addvirtize';
import Category from './Category';
import Displaypic from './Displaypic';
import Exptra from './Exptra/Exptra';
import SideBanner from './SideBanner';
import Product from './Product';

const Home = () => {
    return (
        <div>

            <div className='flex  flex-col lg:flex-row w-11/12 gap-5 h-auto lg:h-[400px] items-center  my-4 mx-auto'>

                <div className='w-full  h-full justify-center items-center flex  bg-white rounded-md shadow-2xl lg:w-8/12'>
                    <Displaypic></Displaypic>
                </div>
                <div className='w-full h-full lg:w-4/12'>
                    <SideBanner />
                </div>
            </div>
            <div className='py-10 w-11/12 mx-auto  gap-4 '>
                <div className='py-6'>
                    <h1 className='text-xl font-bold'>Feature Product</h1>
                    <hr className='bg-black border-[1px] my-2 w-2/3 lg:w-1/5 border-black' />
                </div>
                <div className='flex gap-5 flex-col lg:flex-row'>
                    <div className='w-full lg:w-6/12  '>
                        <Shopings></Shopings>
                    </div>
                    <Product className='w-full lg:w-6/12' />
                </div>
            </div>


            <Category></Category>
            <Addvirtize></Addvirtize>
            <Exptra></Exptra>


        </div>
    );
};

export default Home;