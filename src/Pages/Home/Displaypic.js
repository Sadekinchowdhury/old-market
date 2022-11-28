import React from 'react';
import displayimg from '../../assets/displaymobile.webp'
const Displaypic = () => {
    return (
        <div className="hero px-14 bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={displayimg} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div className='h-1/2'>
                    <h1 className="text-5xl font-bold"> Choose Your favourite Brand </h1>
                    <p className="py-6">
                        You can buy less money but good products.

                    </p>
                    <button className="btn btn-primary">See more</button>
                </div>
            </div>
        </div>
    );
};

export default Displaypic;