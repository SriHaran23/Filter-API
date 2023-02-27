import React, { useEffect, useState } from 'react'

function Users() {
    var [product, setProduct] =useState([""])
  
    useEffect (()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setProduct(data))
        },[])
    console.log(product)
  return (
    <div>
        <div className='d-flex flex-wrap justify-content-center'>
            {
                product && product.map((p, i)=>{
                    return <div className='w-25 m-2 p-4 border border-2 text-start'> 
                        <table>
                            <tr>
                                <th>{p?.id}.</th>
                                <th className='w-50'>Name:</th>
                                <tr className='w-50'>{p?.name}</tr>
                            </tr>
                            <tr>
                                <th></th>
                                <th className='w-50'>User Name:</th>
                                <tr className='w-50'>{p?.username}</tr>
                            </tr>
                            <tr>
                                <th></th>
                                <th className='w-50'>Email:</th>
                                <tr className='w-50'>{p?.email}</tr>
                            </tr>
                            <tr>
                                <th></th>
                                <th className='w-50'>Phone:</th>
                                <tr className='w-50'>{p?.phone}</tr>
                            </tr>
                            <tr>
                                <th></th>
                                <th className='w-50'>Website:</th>
                                <tr className='w-50'>{p?.website}</tr>
                            </tr>
                        </table>
                    </div>
                })
            }
            </div>
    </div>
  )
}

export default Users