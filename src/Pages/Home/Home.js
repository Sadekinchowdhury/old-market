import React from 'react';
import Addvirtize from '../AdvirtiseItem/Addvirtize';
import Category from './Category';
import Displaypic from './Displaypic';
import Sliders from './Sliderss/Slider';
import Slider from './Sliderss/Slider';

const Home = () => {
    return (
        <div>

            <Displaypic></Displaypic>
            <Category></Category>
            <Addvirtize></Addvirtize>
            <Sliders></Sliders>
        </div>
    );
};

export default Home;