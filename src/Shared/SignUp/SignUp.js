

import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form'
// import { toast } from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider';
import UseToken from '../../UseToken/UseToken';
import GoogleLogin from '../Google/GoogleLogin';
import { Checkbox, Input } from 'antd';



// import UseToken from '../../Ussetoken/UseToken';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()

    const [signuperror, setsignUperror] = useState('')

    const { creatUsers, updatePro } = useContext(AuthContext)

    const [createmail, setCreatemail] = useState('')

    const [token] = UseToken(createmail)





    const navigate = useNavigate()
    if (token) {

        navigate('/')
    }

    const handlsignup = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const role = form.role.value;
        console.log(name, email, password, role)
        // creatt user
        creatUsers(email, password)
            .then(result => {
                const user = result.user
                console.log(user, role)
                toast('user created succesfully')
                const userinfo = {
                    displayName: name
                }

                // update user
                updatePro(userinfo)
                    .then(() => { })

                //  save user
                saveUser(email, name, role)

                    .catch(error => console.log(error))

            })
            .catch(errors => {

                setsignUperror(errors.message)
            })



        //  saveUser

        const saveUser = (email, name, role) => {
            const user = { name, email, role }
            fetch('https://old-server.vercel.app/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {

                    setCreatemail(email)

                })
        }
    }


    // get token



    return (
        <div className='min-h-screen flex flex-col w-11/12 mx-auto lg:flex-row gap-20 justify-center py-10 items-center'>
            <div className='w-full lg:w-1/2 mx-auto'>
                <img className='w-full' src="https://img.freepik.com/premium-vector/customizable-flat-illustration-mobile-login_9206-2872.jpg?w=740" alt="" />
            </div>

            <div className='w-full lg:w-1/2 mx-auto px-4'>
                <div className='py-6'>
                    <h1 className='text-center text-[25px] font-semibold '>Lets Create Your Account</h1>
                    <p className='text-[13px] font-bold text-center text-sky-600'>Please enter your details</p>
                </div>
                <div className='w-full  lg:w-2/3 mx-auto'>
                    <form onSubmit={handlsignup}>

                        <div className="form-control py-1 w-full ">
                            <label className="label">
                                Name </label>
                            <Input type="text" name='name' {...register('name', {
                                required: 'name is requerd'
                            })}
                                className=" w-full py-2" />
                            {errors.name && <p className='text-red-600'>

                                {errors.name.message}
                            </p>}
                        </div>

                        <div className="form-control py-1 w-full">
                            <label className="label">
                                Email </label>
                            <Input type="text" {...register("email", {
                                required: 'email is required'
                            })}
                                className=" w-full py-2" />
                            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                        </div>



                        <div className="form-control pt-1 pb-4 w-full">
                            <label className="label">
                                Password </label>
                            <Input type="text" {...register("password", {
                                required: 'pass is required',
                                minLength: { value: 6, message: 'password must be 6 carrecters' },
                                pattern: { value: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'password should be  an uppercase and nmbr' }
                            })}
                                className="w-full py-2" />
                            {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        </div>

                        <div className="form-control pt-2 pb-5 w-full ">

                            <select
                                {...register('role')}
                                className=" py-2  w-full">
                                <option disabled selected >Account Type</option>
                                <option>buyer</option>
                                <option>seller</option>
                            </select>

                        </div>

                        <button type='submit' className='w-full bg-slate-800 cursor-pointer  transition duration-300 hover:scale-105 hover:border-[2px] hover:border-blue-800 py-2 rounded-md text-white'   >
                            Sign Up

                        </button>

                    </form>

                    <div>
                        {signuperror && <p className='text-red-600'>{signuperror}</p>}
                    </div>


                    <div className="divider">OR</div>
                    <GoogleLogin></GoogleLogin>
                </div>

            </div>

            {/* <div className='w-full lg:w-1/2'>
                <div className='py-6'>
                    <h1 className='text-center text-[25px] font-semibold '>Lets Create Your Account</h1>
                    <p className='text-[13px] font-bold text-center text-sky-600'>Please enter your details</p>
                </div>
                <div className='w-full lg:w-2/3 mx-auto'>

                    <form className='' onSubmit={handleSubmit}>

                        <div className="form-control py-2 w-full">
                            <label className="label  ">
                                Email
                            </label>
                            <Input type="text" {...register("email", {

                            })} className="py-2" />

                            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                        </div>



                        <div className="form-control py-2 w-full ">

                            <label className="label">
                                Password</label>

                            <Input type="password" {...register("password", {

                                minLength: { value: 6, message: 'at least 6 carecter' }
                            })} className="py-2" />

                            {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}

                        </div>

                        <div className='flex items-center py-4 justify-between'>
                            <p> <Checkbox /> Remember For 30 days</p>
                            <p>Forgot passowrd</p>
                        </div>


                        <button type='submit' className='w-full bg-slate-800 cursor-pointer  transition duration-300 hover:scale-105 hover:border-[2px] hover:border-blue-800 py-2 rounded-md text-white'   >
                            Sign In

                        </button>
                    </form>



                    <div className='py-4 text-center'>
                        <p>Dont have an account? <Link className='text-green-600 text-[16px] font-bold cursor-pointer' to='/signup'> Sign Up</Link> </p>
                        <div className="divider">OR</div>
                        <GoogleLogin></GoogleLogin>
                    </div>


                </div>
            </div> */}
        </div>
    );
};

export default SignUp;