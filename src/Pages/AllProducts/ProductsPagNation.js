import React from 'react';

const PagaNation = ({ totalpost, postperPage, setcurrentPage }) => {
    let pages = [];
    for (let i = 1; i <= Math.ceil(totalpost / postperPage); i++) {
        pages.push(i)
    }

    return (
        <div className='flex gap-5 justify-center items-center'>
            {
                pages.map((page, index) => {
                    return <button
                        className={`border border-gray-400 py-1 px-4 rounded-md hover:bg-white hover:text-black bg-black  text-white transition duration-200 hover:border-blue-600 hover:border-b-2`} key={index}
                        onClick={() => setcurrentPage(page)} >
                        {page}
                    </button>
                })
            }
        </div>
    );
};

export default PagaNation;