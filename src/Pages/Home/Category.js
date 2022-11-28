import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CategoryCard from './CategoryCard';

const Category = () => {


    const { data: catagoris = [], refetch } = useQuery({

        queryKey: ['categoris'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categoris', {
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            console.log(data)
            refetch()
            return data;
        }
    })


    return (
        <div>
            < div className='mt-9'>

                <h1 className='text-2xl text-center font-bold text-orange-500 py-2'>Your favourite category</h1>
            </div >
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-10 px-28 mb-9'>

                {

                    catagoris?.map(category =>

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