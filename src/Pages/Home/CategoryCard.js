import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    const { name, picture } = category;
    return (

        <Link to={`/category/${category._id}`} className="py-6 shadow-2xl flex items-center justify-center hover:bg-gray-300 hover:scale-105 duration-500 transition ease-in-out rounded-md cursor-pointer">

            <div className="">
                <img className='h-40 w-full' src={picture} alt="" />
                <h2 className=" text-black text-2xl font-semibold text-center py-5 ">{name}</h2>

                {/* <div className="card-actions justify-end">
                    <Link to={`/category/${category._id}`}><AiOutlineArrowRight className="w-24 btn-outline border-white bg-gray-300 btn border-b-gray-100 to-blue-50 h-10    "> </AiOutlineArrowRight></Link> */}
                {/* <a href="#_" class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                        <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                        <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                            <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                            <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Button Text</span>
                    </a> */}
                {/* </div> */}
            </div>

        </Link>
    );
};

export default CategoryCard;