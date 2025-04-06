import React, { useState, useEffect } from 'react'

function Github() {

    const api = 'https://api.github.com/users/mehrotrajiwebsiting';
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(api)
            .then((response) => response.json())
            .then((response) => {
                setData(response);
                console.log(response);
            });
    }, []);

    return (
        <>
            <div className='flex justify-around items-center bg-gray-700 p-4'>
                {data.login && <h1 className='p-4 order-2 text-white font-bold text-4xl'>{data.login} - {data.followers}</h1>}
                {data.avatar_url && <img className='order-1' src={data.avatar_url} alt={data.login} />}
            </div>
        </>
    )
}

export default Github
