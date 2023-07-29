
import { React, useState, useEffect } from 'react'

const UseToken = email => {

    const [token, setToken] = useState('')

    useEffect(() => {
        fetch(`https://old-server.vercel.app/jwt?email=${email}`)

            .then(res => res.json())
            .then(data => {

                if (data.accesTocken) {
                    localStorage.setItem('accessToken', data.accesTocken)
                    setToken(data.accesTocken)
                }
            })



    }, [email])
    return [token]

}


export default UseToken;