import React from 'react';

const Exptra = () => {
    return (
        <div className='py-10 m-3'>
            <h1 className='text-white text-3xl font-semibold text-center'>About our product</h1>
            <div className="hero rounded-2xl  m-3 lg:w-11/12 mx-auto  bg-gray-300 gap-6">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/xfzHb44/download-4.jpg" alt='' className="lg:w-1/2 " />
                    <div>
                        <h1 className="text-5xl font-bold">Why you will buy our product?</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <div class="b animate-bounce mx-auto lg:h-16 h-10 lg:w-64 w-20 flex justify-center items-center">
                            <div class="i h-16 w-64 bg-gradient-to-br from-blue-400 to-blue-600 items-center rounded-xl shadow-2xl  cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out">
                            </div>
                            <a class="text-center text-white font-semibold z-10 pointer-events-none flex justify-content items-center"><span class=""><svg class="w-5 h-5 right-1.5 relative" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg></span>Lets Start</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exptra;