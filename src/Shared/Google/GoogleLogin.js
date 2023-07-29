import { GoogleAuthProvider } from 'firebase/auth';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { FaGoogle } from 'react-icons/fa';

const GoogleLogin = () => {
    const { GoogleLogin } = useContext(AuthContext)

    const gprovider = new GoogleAuthProvider()

    const handGoogle = event => {
        event.preventDefault()
        GoogleLogin(gprovider)
            .then(result => {
                const user = result.user;

            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <button className='flex items-center justify-center w-full border-[1px] border-gray-300 bg-white shadow-2xl rounded-md py-2 gap-3 hover:bg-black hover:text-white transition duration-200 font-semibold' onClick={handGoogle}> <FaGoogle size={21} color='' />  Sign In with google  </button>

        </div>
    );
};

export default GoogleLogin;