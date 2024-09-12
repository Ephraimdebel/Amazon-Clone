import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { ProductUrl } from '../../Api/endPoints'
import classes from "./Product.module.css"
import axios from "axios"
function Product() {
  const [results,seResults] = useState([])
  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products`)
    .then((res)=>{
      seResults(res.data)
    }).catch((err)=> console.log("err"))
  }
  ,[])
  return (
    <section>   
    <hr/>
    <div className={classes.products_container}>
      {results?.map((product)=>(
        <ProductCard 
        key={product.id}
        product = {product}
        />
      ))}
    </div>
  </section>
  )
}

export default Product
