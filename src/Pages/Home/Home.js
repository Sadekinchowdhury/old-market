import React from 'react';
import Shopings from '../../Shoping/Shopings';
import Addvirtize from '../AdvirtiseItem/Addvirtize';
import Category from './Category';
import Displaypic from './Displaypic';
import Sliders from './Sliderss/Slider';
import Slider from './Sliderss/Slider';

const Home = () => {
    return (
        <div>


            <Displaypic></Displaypic>
            <Shopings></Shopings>
            <Category></Category>
            <Addvirtize></Addvirtize>

        </div>
    );
};

export default Home;