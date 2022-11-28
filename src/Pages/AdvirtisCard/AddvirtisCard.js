import React from 'react';

const AddvirtisCard = ({ product, setBooking }) => {
    const { name, price, location, description, originalprice, sellername, postedtime, brand, picture, usedtime, email } = product
    return (
        <div className="card bg-base-100 border shadow-xl">
            <figure><img className='w-full h-40 px-3 py-2' src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='text-blue-700 font-semibold'>price: ${price}</p>
                <p className='text-red-600 font-medium'>original price: ${originalprice}</p>
                <p className='text-orange-900'>Used time: {usedtime}</p>
                <p className=''>posted time: {postedtime}</p>

                <div className="grid  grid-cols-1 lg:grid-cols-2 mx-auto gap-x-14  mt-3">


                    <div className="avatar">
                        <div className="w-10 rounded-full">
                            <img className='' src="https://placeimg.com/192/192/people" alt='' />

                        </div>
                        <p className='ml-3 text-sm font-bold'>

                            {/* {
                                user?.verify ?
                                    <>
                                        <p className='text-blue-600'> verified</p>
                                    </> :
                                    <>
                                        {sellername}
                                    </>



                            } */}
                        </p>
                        <br />


                    </div>

                    <div>
                        <label onClick={() => setBooking(product)} htmlFor="booking-modal" className="btn btn-info btn-sm">Book now</label>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddvirtisCard;