import React from 'react';
import Shopings from '../../Shoping/Shopings';
import Addvirtize from '../AdvirtiseItem/Addvirtize';
import LatestPost from '../LatestPost/LatestPost';
import Category from './Category';
import Displaypic from './Displaypic';
import Exptra from './Exptra/Exptra';
import Sliders from './Sliderss/Slider';
import Slider from './Sliderss/Slider';

const Home = () => {
    return (
        <div>


            <Displaypic></Displaypic>
            <Shopings></Shopings>
            <Category></Category>
            {/* <div className='lg:flex w-2/3 mx-auto  lg:gap-6'>
                <div className='lg:w-3/4 bg-white mx-auto '>
                    <Addvirtize></Addvirtize>
                </div>
                <div className='lg:w-2/5 lg:p-5 bg-gray-300 shadow-2xl  m-3'>
                    <LatestPost></LatestPost>
                </div>
            </div> */}
            <Addvirtize></Addvirtize>
            <Exptra></Exptra>


        </div>
    );
};

export default Home;