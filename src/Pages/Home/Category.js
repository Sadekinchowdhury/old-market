import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CategoryCard from './CategoryCard';
import { useState } from 'react';

const Category = () => {

    // const [currentPage, setCurrentPage] = useState(1)
    // const [postperPage, setPostperPage] = useState(2)


    const { data: categoryProduct = [], refetch } = useQuery({

        queryKey: ['categoris'],
        queryFn: async () => {
            const res = await fetch('https://old-server.vercel.app/categoris')
            const data = await res.json()
            refetch()
            return data;
        }
    })

    // const numberoftotalPage = Math.ceil(categoryProduct.length / postperPage)

    // const pages = [...Array(numberoftotalPage + 1).keys()].slice()


    // const lastpostIndex = currentPage * postperPage
    // const firstpostIndex = lastpostIndex - postperPage
    // const currentPost = categoryProduct.slice(firstpostIndex, lastpostIndex)

    return (
        <div className='lg:w-4/5 mx-auto'>
            < div className='mt-9 '>

                <h1 className='text-2xl text-center font-bold  text-white py-2'>Your favourite category</h1>
                <hr />
            </div >
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-10  mb-9'>

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
            {/* <div className="w-2/5 mt-5 mb-5 mx-auto">

                {
                    pages.map((page, index) => {
                        return <button
                            className='btn btn-active ml-3' key={index}
                            onClick={() => setCurrentPage(page)} >
                            {page}
                        </button>
                    })
                }
            </div> */}
        </div>
    );
};

export default Category;