

import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import GoogleLogin from '../Google/GoogleLogin';


const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const [loginerror, setLoginerror] = useState('')

    const { LogIn } = useContext(AuthContext)

    const location = useLocation()

    const navigate = useNavigate()


    const from = location.state?.from?.pathname || '/'


    const handlogin = data => {

        setLoginerror('')
        LogIn(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user)
                navigate(from, { replace: true })

            })
            .catch(error => {
                console.log(error.message)
                setLoginerror(error.message)
            })
    }




    return (
        <div className=' flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h1 className='text-4xl text-green-700 font-bold text-center'>Login</h1>
                <form onSubmit={handleSubmit(handlogin)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">

                            <span className="label-text">email</span></label>

                        <input type="text" {...register("email", {
                            required: 'email is required'
                        })} className="input input-bordered w-full max-w-xs" />


                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">password</span></label>
                        <input type="password" {...register("password", {
                            required: 'password is required',
                            minLength: { value: 6, message: 'at least 6 carecter' }
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        <label className="label">
                            <span className="label-text">forgot password</span></label>
                    </div>


                    <p></p>
                    <input className='btn btn-accent w-full' type="submit" />
                </form>
                <div>
                    {loginerror && <p className='text-red-600'>{loginerror}</p>}
                </div>
                <p>new to create account <Link className='text-green-600' to='/signup'>create account</Link> </p>
                <div className="divider">OR</div>
                <GoogleLogin></GoogleLogin>
            </div>
        </div>
    );
};

export default Login;