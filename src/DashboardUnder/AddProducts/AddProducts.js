
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';

import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider';

const AddProducts = () => {
    const { user } = useContext(AuthContext)

    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm()

    const date = new Date().toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" });


    const imageHostkeyk = process.env.REACT_APP_IMG_KEY
    const { data: categorisBrand = [], refetch } = useQuery({
        queryKey: ['categorisBrand'],
        queryFn: async () => {
            const res = await fetch('https://old-server.vercel.app/categorisBrand', {
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data;
        }
    })

    const handlAddProduct = data => {
        const image = data.img[0]
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostkeyk}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {

                if (imgData.success) {
                    console.log(imgData.data.url)
                }
                refetch()

                const products = {
                    picture: imgData.data.url,
                    name: data.name,
                    price: data.price,
                    location: data.location,
                    category_id: data.brand,
                    email: user?.email,
                    salestatus: 'unsold',
                    phone: data.phone,
                    usedtime: data.usedtime,
                    postedtime: date,
                    sellername: user?.displayName,
                    originalprice: data.originalprice,
                    description: data.description
                }

                fetch('https://old-server.vercel.app/products', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(products)


                })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result)

                        toast.success('Wow Product added successfully')
                        refetch()
                        navigate('/dashboard/myproducts')

                    })


            })

    }



    return (

        <div className='lg:p-10 p-3'>

            <h1 className='text-2xl py-4 font-bold text-left'>Add products</h1>
            <form onSubmit={handleSubmit(handlAddProduct)}>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 py-3'>
                    <div className="form-control w-full ">
                        <input type="text" {...register("name")} placeholder='Product Name' className="py-2 p-1 rounded-md border border-gray-400 mb-2 w-full " />
                    </div>

                    <div className="form-control w-full ">
                        <input type="text" {...register("usedtime")} placeholder='Usedtime/New' className="py-2 p-1 border border-gray-400 rounded-md  w-full mb-2 " />
                    </div>
                    <div className="form-control w-full ">
                        <input type="text" {...register("location")} placeholder='Add location' className="py-2 p-1 border border-gray-400 rounded-md  w-full mb-2 " />
                    </div>
                </div>


                <div className='grid grid-cols-1 md:grid-cols-3 gap-3 py-3'>
                    <div className="form-control w-full ">
                        <input type="file" {...register("img", {
                            // required: 'img is required'
                        })} placeholder='Add Image' className="py-2 p-1 border border-gray-400 rounded-md  mb-2 w-full " />
                    </div>


                    <div className="form-control w-full ">
                        <input type="number" {...register("price")} placeholder='Price' className="py-2 p-1 border border-gray-400 rounded-md  w-full mb-2 " />
                    </div>

                    <div className="form-control w-full ">
                        <input type="Phone Number" {...register("originalprice")} placeholder='Orginal price' className="py-2 p-1 border border-gray-400 rounded-md  w-full mb-2 " />
                    </div>
                </div>

                <div className='flex flex-col gap-6 lg:flex-row'>


                    <div className="form-control w-full lg:w-4/12 ">
                        <select
                            type='text'{...register("brand")}
                            className="border border-gray-400 py-2 rounded-md mb-2 w-full lg:w-1/2">
                            <option selected hidden>Select Category</option>
                            {
                                categorisBrand.map(categorybrand =>
                                    <option value={categorybrand._id}>{categorybrand.brand}</option>
                                )
                            }</select>
                    </div>

                    <div className="form-control  w-full lg:w-8/12 ">
                        <input type="text" {...register("description")} placeholder='Add description' className="h-40 p-1 border border-gray-400 rounded-md   w-full mb-2 " />
                    </div>
                </div>

                <div className='flex py-3 items-center justify-center'>
                    <input className='btn btn-accent ' type="submit" />
                </div>



            </form>


        </div >
    );
};

export default AddProducts;