import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    const[product,setproduct]=useState([])

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products').then((res)=>{
          console.log(res.data)
          setproduct(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
  return (
    <div className='container' >
      {product.map((el)=>
        <div className='product-card' key={el.id}>
            <img src={el.image} className="product-image"/>
            <p>{el.title}</p>
            <Link to={`/${el.id}`}><button>View Details</button></Link>
            </div >
      )}
    </div>
  )
}

export default Home
