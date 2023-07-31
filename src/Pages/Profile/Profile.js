import React, { useContext, useEffect } from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import ProfileModal from './ProfileModal';
import { AiFillEdit } from 'react-icons/ai';


const ProfileEdit = () => {
    const [social, setSosial] = useState('')

    const { user } = useContext(AuthContext)


    const [users, setUsers] = useState({})

    useEffect(() => {
        fetch(`https://old-server.vercel.app/user?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [user?.email])




    return (
        <div className='min-h-screen bg-slate-700'>
            <div className=' mt-3  w-11/12 mx-auto p-3 '>

                <div className='flex justify-between p-10'>
                    <div>
                        <h1 className='text-3xl text-white font-semibold'>Profile</h1>
                    </div>
                    <div>
                        <label className='cursor-pointer' htmlFor="booking-modal">
                            <AiFillEdit size={30} color='white' />

                        </label>

                    </div>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                    <div className='flex items-center justify-center'>
                        <div>
                            <img className='h-52 w-52 rounded-full' src={users.image} alt="" />


                            <div className='flex justify-center my-10 gap-4 text-yellow-400'>
                                <Link to={social}> <FaFacebookSquare size={24} /></Link>
                                <FaInstagramSquare size={24} />
                                <FaTwitterSquare size={24} />
                                <FaLinkedin size={24} />
                                <FaGithubSquare size={24} />
                            </div>
                        </div>

                    </div>
                    <div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 '>
                            <div className='lg:text-left pl-8 lg:pl-0 text-white mb-3'>
                                <label htmlFor="" className=' font-normal'>Full Name</label>
                                <p className='text-xl font-medium'>{users.name} </p>
                            </div>
                            <div className='lg:text-left pl-8 lg:pl-0 text-white mb-3'>
                                <label htmlFor="" className=' font-normal'>Email Adress</label>
                                <p className='text-xl font-medium'> {users.email}</p>
                            </div>
                            <div className='lg:text-left pl-8 lg:pl-0 text-white mb-3'>
                                <label htmlFor="" className=' font-normal'>Date of birth</label>
                                <p className='text-xl font-medium'> 11/12/2000</p>
                            </div>
                            <div className='lg:text-left pl-8 lg:pl-0 text-white mb-3'>
                                <label htmlFor="" className=' font-normal'> Educational Qualification</label>
                                <p className='text-xl font-medium'>Bachalor Of Science</p>
                            </div>
                            <div className='lg:text-left pl-8 lg:pl-0 text-white mb-3'>
                                <label htmlFor="" className=' font-normal'>Streat Adress line 1</label>
                                <p className='text-xl font-medium'>{users.adress1} </p>
                            </div>
                            <div className='lg:text-left pl-8 lg:pl-0 text-white mb-3'>
                                <label htmlFor="" className=' font-normal'>Streat Adress line 2</label>
                                <p className='text-xl font-medium'>{users.adress2} </p>
                            </div>
                        </div>



                        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                            <div className='lg:text-left pl-8 lg:pl-0 text-white mb-3'>
                                <label htmlFor="" className=' font-normal'>Country</label>
                                <p className='text-xl font-medium'> {users.country}</p>
                            </div>
                            <div className='lg:text-left pl-8 lg:pl-0 text-white mb-3'>
                                <label htmlFor="" className=' font-normal'>Contact Info</label>
                                <p className='text-xl font-medium'>  {users.phone} </p>
                            </div>
                            <div className='lg:text-left pl-8 lg:pl-0 text-white mb-3'>
                                <label htmlFor="" className=' font-normal'> City </label>
                                <p className='text-xl font-medium'>  {users.city} </p>
                            </div>
                            <div className='lg:text-left pl-8 lg:pl-0 text-white mb-3'>
                                <label htmlFor="" className=' font-normal'> {users.zip} </label>
                                <p className='text-xl font-medium'> 3040</p>
                            </div>
                        </div>

                    </div>
                </div>


            </div >
            {
                <ProfileModal users={users} />
            }

        </div>
    );
};

export default ProfileEdit;