import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Load from './Load';
import Modal from './Loadcard/Modals';



const AllCategoris = () => {
    const allcategory = useLoaderData()

    const [booking, setBooking] = useState(null)

    return (
        <section>

            <div>
                <p className='text-6xl text-orange-500 font-bold text-center py-6'>  {`all ${allcategory[1].brand} phone is here`} </p>
            </div>
            <div className='grid gap-5 py-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    allcategory.map(allcat => <Load
                        key={allcat._id}
                        allcat={allcat}
                        setBooking={setBooking}
                    ></Load>

                    )
                }
            </div>
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