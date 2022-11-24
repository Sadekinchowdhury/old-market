import { GoogleAuthProvider } from 'firebase/auth';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const GoogleLogin = () => {
    const { GoogleLogin } = useContext(AuthContext)

    const gprovider = new GoogleAuthProvider()

    const handGoogle = event => {
        event.preventDefault()
        GoogleLogin(gprovider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <button className='btn btn-outline w-full' onClick={handGoogle}>google</button>

        </div>
    );
};

export default GoogleLogin;