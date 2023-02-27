import React, { useEffect, useState } from 'react'

function Posts() {
    var [product, setProduct] =useState([""])
  
    useEffect (()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
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
                        <h4>{p?.title}</h4>
                        <p>{p?.body}</p>
                    </div>
                })
            }
            </div>
    </div>
  )
}

export default Posts