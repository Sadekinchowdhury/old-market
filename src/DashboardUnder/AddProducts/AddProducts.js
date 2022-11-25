import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const AddProducts = () => {
    const { user } = useContext(AuthContext)

    const { data: categorisBrand = [], refetch } = useQuery({
        queryKey: ['categorisBrand'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categorisBrand')
            const data = await res.json()
            console.log(data)
            return data;
        }
    })
    const handleSubmit = event => {
        console.log(event)
    }

    return (
        <div className='w-1/2 '>

            <form className='justify-center align-middle' onSubmit={handleSubmit}>

                <select
                    type='text' name='brand'
                    className="select select-bordered w-full">
                    <option selected disabled>Select Category</option>
                    {
                        categorisBrand.map(categorybrand =>
                            <option value={categorybrand._id}>{categorybrand.brand}</option>
                        )
                    }

                </select>

                <input type="text" name='name' defaultValue={user?.displayName} readOnly placeholder="name" className="input w-full mt-10  input-bordered " />

                <input type="text" name='itemname' readOnly placeholder="name" className="input w-full mt-10   input-bordered " />

                <input type="email" name='email' defaultValue={user?.email} readOnly disabled placeholder="email" className="input w-full mt-10   input-bordered " />

                <input type="number" name='price' readOnly

                    placeholder="price" className="input w-full mt-10  input-bordered " />



                <input type="text" name='phone' placeholder="your phone number" className="input w-full mt-10   input-bordered " />

                <input type="text" name='location' placeholder="your location " className="input w-full mt-10   input-bordered " />



                <input className='w-full  btn-primary rounded mt-10' type="submit" value="submit" />
            </form>
        </div>
    );
};

export default AddProducts;