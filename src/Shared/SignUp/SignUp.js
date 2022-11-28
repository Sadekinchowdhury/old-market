

import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form'
// import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider';
import UseToken from '../../UseToken/UseToken';
import GoogleLogin from '../Google/GoogleLogin';



// import UseToken from '../../Ussetoken/UseToken';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()

    const [signuperror, setsignUperror] = useState('')

    const { creatUsers, updatePro } = useContext(AuthContext)

    const [createmail, setCreatemail] = useState('')

    const [token] = UseToken(createmail)





    const navigate = useNavigate()
    if (token) {
        console.log(token)
        navigate('/')
    }

    const handlsignup = data => {

        // creatt user
        creatUsers(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user, data.role)
                toast('user created succesfully')
                const userinfo = {
                    displayName: data.name
                }

                // update user
                updatePro(userinfo)
                    .then(() => { })

                //  save user
                saveUser(data.email, data.name, data.role)

                    .catch(error => console.log(error))
                console.log(user)
            })
            .catch(errors => {

                setsignUperror(errors.message)
            })



        //  saveUser

        const saveUser = (email, name, role) => {
            const user = { name, email, role }
            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setCreatemail(email)

                })
        }
    }


    // get token



    return (
        <div className=' flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h1 className='text-4xl text-green-700 text-center font-bold'>Signup</h1>
                <form onSubmit={handleSubmit(handlsignup)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">name</span></label>
                        <input type="text" name='name' {...register('name', {
                            required: 'name is requerd'
                        })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600'>

                            {errors.name.message}
                        </p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">email</span></label>
                        <input type="text" {...register("email", {
                            required: 'email is required'
                        })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Condition</span></label>
                        <select
                            {...register('role')}
                            className="select select-bordered w-full max-w-xs">
                            <option>buyer</option>
                            <option>seller</option>
                        </select>

                    </div>




                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">password</span></label>
                        <input type="text" {...register("password", {
                            required: 'pass is required',
                            minLength: { value: 6, message: 'password must be 6 carrecters' },
                            pattern: { value: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'password should be  an uppercase and nmbr' }
                        })}
                            className="input input-bordered mb-6 w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>




                    <p></p>
                    <input className='btn btn-accent w-full' type="submit" />
                </form>

                <div>
                    {signuperror && <p className='text-red-600'>{signuperror}</p>}
                </div>

                {/* <p>new to create account <Link className='text-green-600' to='/signup'>create account</Link> </p> */}
                <div className="divider">OR</div>
                <GoogleLogin></GoogleLogin>
            </div>
        </div>
    );
};

export default SignUp;