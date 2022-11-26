import React from 'react';
import { Link } from 'react-router-dom';

const BadRoutes = () => {
    return (
        <div className=''>
            <h1 className='text-8xl font-bold text-orange-800 text-center w-1/2 mx-auto mt-32 mb-4'>Opps!</h1>
            <p className='text-4xl text-black text-center w-1/2 mx-auto font-bold mt-46'>404-page not found
                got to <Link to='/' className='btn btn-accent'>Homepage</Link>
            </p>






        </div>
    );
};

export default BadRoutes;