import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import { ProductUrl } from '../../Api/endPoints'
import ProductCard from '../../Components/Product/ProductCard'

function ProductDetail() {
  const { productId } = useParams()
  const [products ,setProduct] = useState([])
  console.log("poduct detail page called", useParams())

  console.log("eshi ezi dersual")
  useEffect(() => {
    //https://fakestoreapi.com/products/1
    //${ProductUrl}/products/${productId}
    axios.get(`https://fakestoreapi.com/products`)
    .then((res)=>{
      let request = res.data.filter((product)=>{ return product.id == productId})
      setProduct(request)
      console.log("the fetched one",request)
    }).catch((err)=> console.log(err))
  },[])
  console.log("this is products",products)
  return (
    <>
    {
      products?.map((product)=>{
       return <ProductCard key={product.id}  product = {product}/>
      })


    }
    
    </>
  )  
}

export default ProductDetail;
