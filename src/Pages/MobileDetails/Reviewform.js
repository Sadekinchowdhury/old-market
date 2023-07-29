import React from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider';
import { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaShoppingBasket, FaShoppingCart, FaStar } from 'react-icons/fa';
import { motion, } from 'framer-motion';

import { AiOutlineMinus, AiOutlinePlus, } from 'react-icons/ai';
import { Input, Rate } from 'antd';







const Reviewform = ({ MobileDetails, refetch }) => {
    const { user, users, notiNumber, setNotiNumber, } = useContext(AuthContext)

    const { description, location, name, originalprice, picture, postedtime, price, sellername, usedtime, _id } = MobileDetails

    const date = new Date()



    const [loading, setLoading] = React.useState(true);

    const [inputvalue, setInputvalue] = useState('')

    const handleTextareaChange = (event) => {
        const { value } = event.target;
        setInputvalue(value);
    };


    const handlReview = (event) => {

        event.preventDefault()
        const form = event.target

        const name = form.name.value;
        const email = form.email.value;

        const reviewProduct = {
            userName: user?.name,
            userEmail: user?.email,
            name: name, email: email, comment: inputvalue,
            reviewId: _id, reviewDate: date,
            image: users?.image,

        }



        fetch('http://localhost:5000/review', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(reviewProduct)

        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    toast.success('Wow review aded')
                    refetch()
                }



            }

            )

    }
    return (
        <div className='w-full lg:w-5/12'>
            <div>
                <p className='text-[16px]'>Ratting</p>


            </div>
            <div>
                {/* <div className='flex'>

                    {/* Displaying stars for user selection */}
                {/* {[1, 2, 3, 4, 5].map((star) => (
                    <span
                        key={star}
                        className="text-4xl cursor-pointer "
                        onClick={() => handleStarClick(star)}
                    >
                        {star <= rating ? <FaStar color='yellow' /> : <FaStar />}
                    </span>
                ))} */}
                {/* </div>  */}

            </div>
            <form onSubmit={handlReview} action="">
                <div className="form-control  gap-5 py-4">
                    <div>
                        <label className='text-[16px]'>Review</label>

                        <Input.TextArea name={inputvalue} className='h-32 ' placeholder="Review" allowClear onChange={handleTextareaChange} />

                    </div>
                    <div >
                        <label className='text-[16px]' htmlFor="">Name</label>
                        <Input name='name' placeholder="Name" className='py-2' allowClear onChange={onchange} />
                    </div>
                    <div>
                        <label className='text-[16px]' htmlFor="">Email</label>
                        <Input name='email' className='py-2' placeholder="Email" allowClear onChange={onchange} />
                    </div>


                </div>
                <div className='py-5'>

                    <input className='px-5 py-3 bg-black text-white font-semibold hover:text-black hover:bg-gray-300 ease-in-out  transition-colors duration-200 shadow-2xl hover:border-[1px] hover:border-gray-500 rounded-sm  gap-2' type="submit" />
                </div>
            </form>

        </div>
    );
};

export default Reviewform;