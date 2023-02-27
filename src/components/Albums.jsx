import React, { useEffect, useState } from 'react'

function Albums() {
    var [product, setProduct] =useState([""])
  
    useEffect (()=>{
        fetch('https://jsonplaceholder.typicode.com/albums')
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
                        <h6>{p?.id}. {p?.title}</h6>
                    </div>
                })
            }
            </div>
    </div>
  )
}

export default Albums