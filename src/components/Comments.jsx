import React, { useEffect, useState } from 'react'

function Comments() {
    var [product, setProduct] =useState([""])
  
    useEffect (()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res=>res.json())
        .then(data=>setProduct(data))
        },[])
    console.log(product)
  return (
    <div>
        <div className='d-flex flex-wrap justify-content-center'>
            {
                product && product.map((p, i)=>{
                    return <div className='w-25 m-2 p-4 border border-2'> 
                        <h6>{p?.name}</h6>
                        <a href={p?.email}>{p?.email}</a>
                        <p>{p?.body}</p>
                    </div>
                })
            }
            </div>
    </div>
  )
}

export default Comments