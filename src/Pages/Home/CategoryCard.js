import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    const { name, picture } = category;
    return (

        <Link to={`/category/${category._id}`} className="py-6  flex items-center justify-center   hover:scale-105 duration-500 transition ease-in-out rounded-md cursor-pointer">

            <div className="">
                <img className='h-28 w-full' src={picture} alt="" />
                <h2 className=" text-black text-2xl font-semibold text-center py-5 ">{name}</h2>
            </div>

        </Link>
    );
};

export default CategoryCard;