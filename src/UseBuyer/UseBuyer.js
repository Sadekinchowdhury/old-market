

import { React, useEffect, useState } from 'react';

const UseBuyer = email => {
    const [isBuyer, setisBuyer] = useState(false)
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {

        if (email) {
            fetch(`http://localhost:5000/users/buyer/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setisBuyer(data.isBuyer)

                    setIsLoading(false)
                })
        }



    }, [email])
    return [isBuyer, isLoading];
};

export default UseBuyer;