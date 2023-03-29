import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BiArrowToRight, BiLeftArrow } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    console.log(category)
    const { name, picture } = category;
    return (
        <div className="card m-3 p-4 border-2 rounded-none  shadow-xl">
            <figure><img className='h-64' src={picture} alt="" /></figure>
            <div className="card-body flex mt-2">
                <h2 className="card-title text-white">{name}</h2>

                <div className="card-actions justify-end">
                    <Link to={`/category/${category._id}`}><AiOutlineArrowRight className="w-24 btn-outline border-white bg-gray-300 btn border-b-gray-100 to-blue-50 h-10    "> </AiOutlineArrowRight></Link>
                </div>
            </div>

        </div>
    );
};

export default CategoryCard;