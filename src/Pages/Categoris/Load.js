import React from 'react';

const Load = ({ allcat, setBooking }) => {

    const { name, price, location, description, originalprice, sellername, postedtime, brand, picture, usedtime } = allcat

    return (
        <div className="card border h-2/3 bg-base-100 shadow-xl">
            <figure className="px-4 ">
                <img src={picture} alt="Shoes" className="rounded-xl w-full h-1/2" />
            </figure>

            <div className="card-body">
                <h2 className="card-title text-center"> {name} </h2>
                <p className='text-blue-700 font-semibold'>price: ${price}</p>
                <p className='text-red-600 font-medium'>original price: ${originalprice}</p>
                <p className='text-orange-900 font-mono'>Used time: {usedtime}</p>
                <p className='font-mono'>posted time: {postedtime}</p>
                <p className='font-mono'>seller name: {sellername}</p>

                <div className="justify-center">

                    <label onClick={() => setBooking(allcat)} htmlFor="booking-modal" className="btn btn-accent">Book now</label>

                </div>
            </div>
        </div>
    );
};

export default Load;