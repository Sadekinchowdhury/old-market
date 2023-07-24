import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckOutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY)

const Payment = () => {
    const book = useLoaderData()
    console.log(book)
    return (
        <div className='flex items-center justify-center content-center '>
            <div className='w-full lg:w-7/12 mx-auto p-6 border border-black rounded-md bg-slate-800 my-11'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        key={book._id}
                        book={book}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;