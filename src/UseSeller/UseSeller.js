

import { React, useEffect, useState } from 'react';

const UseSeller = email => {
    const [isSeller, setisSeller] = useState(false)
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {

        if (email) {
            fetch(`https://old-server.vercel.app/users/seller/${email}`, {
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setisSeller(data.isSeller)

                    setIsLoading(false)
                })
        }



    }, [email])
    return [isSeller, isLoading];
};

export default UseSeller;