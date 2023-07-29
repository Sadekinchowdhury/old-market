
import { React, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider';




const AddvirtisCardModal = ({ booking, setBooking }) => {
    const navigate = useNavigate()

    const { name, price, _id } = booking
    const date = new Date().toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" });


    const { user } = useContext(AuthContext)


    const handSubmit = event => {

        event.preventDefault()
        const form = event.target
        const user_location = form.location.value;
        const user_phone = form.phone.value;


        const booking = {
            userName: user?.displayName,
            email: user?.email,
            price: price,
            user_location,
            user_phone,
            itemname: name,
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
                    setBooking(null)

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
                    <h3 className="text-2xl font-bold text-center">Book {name}cheap price </h3>


                    <form onSubmit={handSubmit}>

                        <input type="text" name='name' defaultValue={user?.displayName} readOnly placeholder="name" className="input w-full mt-10   input-bordered " />

                        <input type="text" name='itemname' readOnly defaultValue={name} placeholder="name" className="input w-full mt-10   input-bordered " />

                        <input type="email" name='email' defaultValue={user?.email} readOnly disabled placeholder="email" className="input w-full mt-10   input-bordered " />

                        <input type="number" name='price' readOnly
                            defaultValue={price}
                            placeholder="price" className="input w-full mt-10  input-bordered " />



                        <input type="text" name='phone' placeholder="your phone number" className="input w-full mt-10   input-bordered " />

                        <input type="text" name='location' placeholder="your location " className="input w-full mt-10   input-bordered " />



                        <input className='w-full  btn-primary rounded mt-10' type="submit" value="submit" />
                    </form>
                </div>
            </div></>
    );
};

export default AddvirtisCardModal;