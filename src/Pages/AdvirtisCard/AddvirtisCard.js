import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { FaCheckCircle, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider';

const AddvirtisCard = ({ product, setBooking }) => {
    const { name, price, location, description, originalprice, sellername, postedtime, brand, picture, usedtime, email } = product

    const { user, setNotiNumber, notiNumber } = useContext(AuthContext)


    const [cart, setCart] = useState()

    const [cartAdd, setCartAdd] = useState(false)

    const update = {
        cart, cartAdd,
        bookingEmail: user?.email,
        MobileDetails: product
    }
    const handlAddCart = () => {

        setCart(1)
        setNotiNumber(notiNumber + 1)
        setCartAdd(true)



        fetch('https://old-server.vercel.app/booking', {
            method: 'POST',

            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(update)

        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {

                    toast.success('congratulations you are successfully cart add ')


                }
                else {
                    toast.error(data.message)
                }


            })

    }






    const { data: users = {}, refetch } = useQuery({
        queryKey: ['user', email],
        queryFn: async () => {

            const res = await fetch(`https://old-server.vercel.app/user?email=${product?.email}`);
            const data = await res.json()
            refetch()
            return data;
        }
    })
    const [open, setOpen] = useState(false)

    const hovemouse = () => {
        setOpen(!open)
    }

    return (
        <section onMouseEnter={hovemouse}
            onMouseLeave={hovemouse}
            className={``}
        >
            {product.advertise || !product.soldStatus ?

                <div className={`card ${open ? 'border shadow-xl' : 'border-none'} rounded-md`}>
                    <Link to={`/card_details/${product?._id}`}>
                        <div className='flex pt-2 justify-center items-center '>
                            <img className='w-11/12 mx-auto  h-44' src={picture} alt="" />
                        </div>
                        <h2 className="card-title flex items-center text-center justify-center uppercase py-2">{name}</h2>
                        <div className='flex py-3  gap-4 justify-center items-center text-center'>

                            <p className='text-xl font-semibold line-through'>${price}</p>
                            <p className='text-xl font-semibold'>${originalprice}</p>
                        </div></Link>
                    <div className={`pt-3 px-3 pb-2  ${open ? 'block' : 'hidden'}`}>

                        {/* <div className="flex pt-2  gap-1 justify-between">


                            <div className="flex items-center">
                                <div className="relative">
                                    <img className={`border-black border-[1px] w-8 h-8 rounded-full  transition duration-300 ease-in-out ${open && 'hover:scale-105'}`} src={users?.image} alt='' />
                                    {
                                        users?.role === 'seller' && users?.verify ? <FaCheckCircle color='green' className='absolute -top-1 -right-3' /> : <></>
                                    }

                                </div>
                                <p className='ml-3 text-sm font-bold'>
                                    {sellername}

                                </p>
                                <br />


                            </div>

                            <div className='flex'>
                                {
                                    user?.email ? <>
                                        <label
                                            onClick={handlAddCart}
                                            className="flex gap-1 items-center px-1 py-1 border border-gray-300 cursor-pointer font-semibold hover:border-blue-700 hover:border-2 hover:bg-black hover:text-white transition duration-200  "><FaShoppingCart /> Add cart</label>
                                    </> :
                                        <>
                                            <Link className='flex gap-1 items-center px-2 py-1 border border-gray-300 cursor-pointer font-semibold hover:border-blue-700 hover:border-2 hover:bg-black hover:text-white transition duration-200  ' to='/login'>
                                                <FaShoppingCart />
                                                Add cart
                                            </Link>
                                        </>

                                }



                            </div>
                        </div> */}
                        <div className='w-full text-center'>
                            {
                                user?.email ? <>
                                    <label
                                        onClick={handlAddCart}
                                        className="flex uppercase justify-center gap-2 items-center px-1 py-2 border border-gray-300 cursor-pointer font-semibold hover:border-blue-700 hover:border-2 hover:bg-black hover:text-white transition duration-200 text-center "><FaShoppingCart /> <span className='text-center'>Add cart</span> </label>
                                </> :
                                    <>
                                        <Link className='flex gap-1 items-center px-2 py-1 border border-gray-300 cursor-pointer font-semibold hover:border-blue-700 hover:border-2 hover:bg-black hover:text-white transition duration-200  ' to='/login'>
                                            <FaShoppingCart />
                                            Add cart
                                        </Link>
                                    </>

                            }



                        </div>
                    </div>

                </div>
                : <><h1>Nothing...</h1></>
            }



        </section>
    );
};

export default AddvirtisCard;