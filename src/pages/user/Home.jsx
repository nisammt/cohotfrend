import React, { useState } from 'react'
import { axiosInstance } from '../../config/axiosInstance';
import { useEffect } from 'react';
import ProductCard from './ProductsCard'


const Home = () => {
  const [product, setProduct] =useState([]);
  const productList = async ()=>{
    try {
      const res = await axiosInstance({
        method:"GET",
        url:"/product/getproduct",
      });
       setProduct(res?.data?.data)
      console.log("allproduct", res);
      
      
    } catch (error) {
      console.log(error);
      
    }
  };
  useEffect(()=>{
    productList();

  },[])


  return (
    <>
    {product.map((product,index)=>{
     return(
      <div>
      
      <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={product?.image}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{product.title}</h2>
    <p>Price :$ {product.price} </p>
    <div className="card-actions">
      <button className="btn btn-primary">View Product</button>
     <button className="btn btn-primary">Buy Now</button>


    </div>
    
  </div>
</div>
    

      </div>
     )
    })}
   
    </>

  )
}

export default Home
