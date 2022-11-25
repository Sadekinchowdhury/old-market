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
        <div>
            <div className='w-96 my-11'>
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