import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Load from './Load';
import Modal from './Loadcard/Modals';



const AllCategoris = () => {
    const allcategory = useLoaderData()
    console.log(allcategory.length)
    const [booking, setBooking] = useState(null)
    // const [currentPage, setcurrentPage] = useState(1)
    // const [postperPage, setPostperPage] = useState(4)

    // const numberoftotalPage = Math.ceil(allcategory.length / postperPage)
    // const pages = [...Array(numberoftotalPage + 1).keys()].slice(1)


    // const lastpostindex = currentPage * postperPage;
    // const firstpostindex = lastpostindex - postperPage;
    // const currentpost = allcategory.slice(firstpostindex, lastpostindex)
    return (
        <section className='lg:w-11/12  mx-auto'>

            <div>
                <p className='text-4xl text-orange-500 font-bold text-center py-6'> Choose Your favourite Phone </p>
            </div>
            <div className='grid gap-5 h-1/2  grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {
                    allcategory?.map(allcat => <Load
                        key={allcat._id}
                        allcat={allcat}
                        setBooking={setBooking}
                    ></Load>

                    )
                }

            </div>
            {/* <div className="w-2/5 mt-5 mb-5 mx-auto">

                {
                    pages.map((page, index) => {
                        return <button
                            className='btn btn-active ml-3' key={index}
                            onClick={() => setcurrentPage(page)} >
                            {page}
                        </button>
                    })
                }
            </div> */}

            {
                booking && <Modal
                    booking={booking}
                    setBooking={setBooking}

                >

                </Modal>
            }


        </section>
    );
};

export default AllCategoris;