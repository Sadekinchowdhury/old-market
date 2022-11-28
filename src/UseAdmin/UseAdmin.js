

import { React, useEffect, useState } from 'react';

const UseAdmin = email => {
    const [isAdmin, setisAdmin] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {

        if (email) {
            fetch(`https://old-server.vercel.app/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setisAdmin(data.isAdmin)
                    setIsLoading(false)
                })
        }



    }, [email])
    return [isAdmin, isLoading];
};

export default UseAdmin;