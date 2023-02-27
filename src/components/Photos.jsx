import React, { useEffect, useState } from 'react'
import './Photos.css';

function Photos() {
    var [product, setProduct] =useState([""])
    var [temp, setTemp] = useState("")
    var [num, setNum] = useState(1)

    function asd(e){
        setNum(e.target.value)
        console.log(num)
        setTemp(product.slice(0,num))
    }
    
    useEffect (()=>{
        setTemp(product.slice(1,50))
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res=>res.json())
        .then(data=>setProduct(data))
        },[])
    
  return (
    <div>
        <div><input type="range" min="0" max="5000"  className="slider" name="points" onChange={(e)=>{asd(e)}} id="myRange" /></div>
        <div className='d-flex flex-wrap justify-content-center'>
            {
                temp && temp.map((p, i)=>{
                    return <div className='w-25 m-2 p-4 border border-2'><h6>{p?.id}. {p?.title}</h6>
                        <img src={p?.url} width="60%" alt="" />
                        <a className='text-decoration-none' href={p?.thumbnailUrl}>{p?.thumbnailUrl}</a></div>
                })
            }
            </div>
    </div>
  )
}

export default Photos