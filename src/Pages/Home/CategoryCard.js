import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    console.log(category)
    const { name, description, picture, _id } = category;
    return (
        <div className="card m-3  bg-gradient-to-b from-sky-400 to-sky-200 shadow-xl">
            <figure><img className='h-64' src={picture} alt="" /></figure>
            <div className="card-body mt-2">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <Link to={`/category/${category._id}`}><button className="btn h-1/2 btn-outline btn-info"><p className='text-stone-900 font-semibold'>See more</p></button></Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;