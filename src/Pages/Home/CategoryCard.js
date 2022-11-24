import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {

    const { name, description, picture, _id } = category;
    return (
        <div className="card bg-base-100 border shadow-xl">
            <figure><img className='w-40px' src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <Link to={`/category/${category._id}`}> <button className="btn btn-primary">See more</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;