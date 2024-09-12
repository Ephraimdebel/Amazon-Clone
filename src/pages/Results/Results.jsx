import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import classes from "./Results.module.css"
import ProductCard from '../../Components/Product/ProductCard'
import { ProductUrl } from '../../Api/endPoints'
function Results() {
  const [results,seResults] = useState([])
  const {categoryName} = useParams()
  useEffect(() => {
    
    axios.get(`${ProductUrl}/products/category/${categoryName}`)
    .then((res)=>{
      seResults(res.data)
    }).catch((err)=> console.log("err"))
  }, [])
  return (
    <section>
      <h1 style={{padding:"30px"}}>Results </h1>
      <p>Category / {categoryName}</p>
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

export default Results
