
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';

import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider';

const AddProducts = () => {
    const { user } = useContext(AuthContext)
    console.log(user?.email)
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm()



    const date = new Date().toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" });


    const imageHostkeyk = process.env.REACT_APP_IMG_KEY

    const { data: categorisBrand = [], refetch } = useQuery({
        queryKey: ['categorisBrand'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categorisBrand')
            const data = await res.json()

            return data;
        }
    })

    const handlAddProduct = data => {
        console.log(data)


        const image = data.img[0]
        console.log(image)
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostkeyk}`
        fetch(url, {
            method: 'POST',
            body: formData


        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData)
                // if (imgData.success) {
                //     // console.log(imgData.data.url)
                // }
            })
        const products = {
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
            description: data.description,

        }
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(products)


        })
            .then(res => res.json())
            .then(result => {
                console.log(result)

                toast.success('Wow Product added successfully')
                navigate('/dashboard/myproducts')

            })


    }



    return (

        <div className=' flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h1 className='text-4xl text-green-700 font-bold text-center'>add products</h1>
                <form onSubmit={handleSubmit(handlAddProduct)}>

                    <div className="form-control w-full max-w-xs">
                        <select
                            type='text'{...register("brand")}
                            className="select select-bordered w-full">
                            <option selected disabled>Select Category</option>
                            {
                                categorisBrand.map(categorybrand =>
                                    <option value={categorybrand._id}>{categorybrand.brand}</option>
                                )
                            }</select>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <input type="text" {...register("name")} placeholder='name' className="input input-bordered w-full max-w-xs" />
                    </div>
                    {/* 
                    <div className="form-control w-full max-w-xs">
                        <input type="text" {...register('sellername')}
                            defaultValue={user?.displayName}
                            placeholder='sellername' className="input input-bordered w-full max-w-xs" />
                    </div> */}

                    <div className="form-control w-full max-w-xs">
                        <input type="text" {...register("location")} placeholder='add location' className="input input-bordered w-full max-w-xs" />
                    </div>



                    <div className="form-control w-full max-w-xs">
                        <input type="text" {...register("usedtime")} placeholder='usedtime' className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <input type="number" {...register("price")} placeholder='price' className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <input type="number" {...register("originalprice")} placeholder='Orginal price' className="input input-bordered w-full max-w-xs" />
                    </div>

                    {/* <div className="form-control w-full max-w-xs">
                        <input type="email" {...register("email")}
                            defaultValue={user?.email}
                            className="input input-bordered w-full max-w-xs" />
                    </div> */}


                    <div className="form-control w-full max-w-xs">
                        <input type="file" {...register("img", {
                            // required: 'img is required'
                        })} placeholder='img add' className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <input type="text" {...register("description")} placeholder='add description' className="input input-bordered w-full max-w-xs" />
                    </div>




                    <input className='btn btn-accent w-full' type="submit" />

                </form>


            </div >
        </div >
    );
};

export default AddProducts;