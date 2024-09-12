import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import classes from "./product.module.css"
import Rating from "@mui/material/Rating"
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat"
function ProductCard({product}) {
    const navigate = useNavigate();
    const {image,title,id,rating,price} = product;
    console.log("product card page",product)

    const handleRoute = ()=>{
        navigate(`/products/${id}`)
    }

  return (
    <div onClick={handleRoute} className={`${classes.card__container}`}>
        <a href = {`/products/${id}`}>
            <img src={image} alt='' className={classes.img_container} />
        </a>
        <div>
            <h3>{title}</h3>
            <div className={classes.rating}>
                <Rating value = {rating.rate} precision = {0.1} />
                <small>{rating.count}</small>
            </div>
            <div>
                {/* <CurrencyFormat amount={price}/> */}
            </div>
            <button className={classes.button}>
                add to Cart
            </button>
        </div>
    </div>
  )
}

export default ProductCard
