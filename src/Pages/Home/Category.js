import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CategoryCard from './CategoryCard';
import { Link } from 'react-router-dom';

const Category = () => {

    const { data: categoryProduct = [], refetch } = useQuery({
        queryKey: ['categoris'],
        queryFn: async () => {
            const res = await fetch('https://old-server.vercel.app/categoris')
            const data = await res.json()
            return data;
        }
    })


    return (
        <div className='w-11/12 lg:py-5 mx-auto'>

            <div>
                <h1 className='text-2xl text-center font-bold  text-black py-2'>Top Category </h1>
                <hr className='border w-4/12 mx-auto  border-gray-200' />
            </div>
            {/* <ul className='flex-col lg:flex-row flex gap-3 '>
                    <li>
                        <Link className='hover:text-orange-400 transition duration-400  py-2 px-3 hover:rounded-sm text-[15px] font-semibold' to='/'>Home</Link>
                    </li>
                    <li>
                        <Link className='hover:text-orange-400 transition duration-400  py-2 px-3 hover:rounded-sm text-[15px] font-semibold' to=''>Contact us</Link>
                    </li>
                    <li>
                        <Link className='hover:text-orange-400 transition duration-400  py-2 px-3 hover:rounded-sm text-[15px] font-semibold' to='/blog'>Blog</Link>
                    </li>


                    <li>

                    </li>
                </ul> */}




            <div className='grid grid-cols-1  w-full lg:w-8/12  mx-auto md:grid-cols-2 lg:grid-cols-3 gap-3 py-6 '>

                {
                    categoryProduct.length &&

                    categoryProduct?.map(category =>
                        <CategoryCard
                            key={category._id}
                            category={category}
                        >
                        </CategoryCard>
                    )
                }
            </div>
        </div>
    );
};

export default Category;