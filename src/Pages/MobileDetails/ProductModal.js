

import { React, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider';
import TextArea from 'antd/es/input/TextArea';
import { Input } from 'antd';




const Modal = ({ details, cart }) => {
    const navigate = useNavigate()

    const { name, price, _id } = details



    let totalPrice = price * cart


    const date = new Date().toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" });


    const { user } = useContext(AuthContext)




    const [users, setUsers] = useState({})

    useEffect(() => {
        fetch(`https://old-server.vercel.app/user?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [user?.email])


    const handSubmit = event => {

        event.preventDefault()
        const form = event.target

        // const user_phone = form.phone.value;
        // const adress1 = form.adress1.value;
        // const adress2 = form.adress2.value;
        // const description = form.description.value;


        const booking = {
            userName: users?.name,
            email: user?.email,
            price: totalPrice,


            adress1: users?.adress1, adress2: users?.adress2,

            quantity: cart,
            user_phone: users?.phone,
            productName: name,
            date,
            productId: _id

        }


        fetch('https://old-server.vercel.app/booking', {
            method: 'POST',

            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(booking)

        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {

                    toast.success('congratulations you are successfully booking ')
                    navigate('/dashboard/myorders')

                }
                else {
                    toast.error(data.message)
                }


            })

    }


    return (

        <>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-xl pb-3 font-bold text-center">Book {name} </h3>


                    <form onSubmit={handSubmit} className='p-0 lg:p-8'>

                        {/* <input type="text" name='name' defaultValue={user?.displayName} readOnly placeholder="name" className="input w-full mt-10   input-bordered " /> */}

                        <p className='text-[14px] font-medium '>Buyer Name- {users?.name}</p>
                        <p className='text-[14px] font-medium'>Product Name- {details?.name}</p>
                        <p className='text-[14px] font-medium'>Email- {users?.email}</p>
                        <p className='text-[14px] font-medium'>Price- {totalPrice}</p>
                        <p>Adress- {users?.adress1}</p>
                        <p>Zip-{users?.zip}</p>

                        {/* <input type="text" name='itemname' readOnly defaultValue={name} placeholder="name" className="input w-full mt-10   input-bordered " /> */}

                        {/* <input type="email" name='email' defaultValue={user?.email} readOnly disabled placeholder="email" className="input w-full mt-10   input-bordered " /> */}

                        {/* <input type="number" name='total'
                            value={totalPrice}
                            placeholder="price" className="input w-full mt-10  input-bordered " /> */}


                        {/* <div className='py-4 gap-3'>

                            <div className='flex items-center gap-5 py-3'>
                                <div>
                                    <label htmlFor="">Phone Number</label>
                                    <Input type="text" name='phone' placeholder="your phone number" className="w-full py-2" />
                                </div>

                                <div>  <label htmlFor="">Adress 1</label>
                                    <Input type="text" name='adress1' placeholder="adress1" className="w-full py-2" /></div>
                            </div>

                            <div className='w-full py-2'>
                                <label htmlFor="">Adress 2</label>
                                <Input type="text" name='adress2' placeholder="your location " className="w-full py-2" />

                            </div>
                            <div className='w-full py-2'>
                                <label htmlFor="">Description</label>

                                <TextArea type="text" name='description' placeholder="your location" className="w-full " />

                            </div>
                        </div> */}

                        <div className='flex justify-center items-center'>
                            <input className='py-3 px-6 rounded-md border border-gray-300 text-white bg-black shadow-2xl hover:bg-gray-700 cursor-pointer' type="submit" value="submit" />
                        </div>

                    </form>
                </div>
            </div></>
    );
};

export default Modal;