import React, { useContext } from 'react'
import ProductCard from '../../Components/Product/ProductCard'
import { DataContext } from '../../Components/DataProvider/DataProvider'
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat'
import { Link } from 'react-router-dom'
import classes from "./cart.module.css"


function Cart() {
  const [{basket,user},dispatch] = useContext(DataContext)
  const total = basket.reduce((amount,item)=>{
     return item.price + amount
  },0)
  return (
    <section className={classes.container}>
        <div className={classes.cart__container}>
          <h2>Hello</h2>
            <h3>Your shopping basket</h3>
            <hr />

            {
              basket?.length==0 ? (<p>Opps ! No item in your cart</p>):(
                basket?.map((item,i)=>{
                  return <ProductCard key={i} product={item} flex={true} renderAdd={true}/>
                })
              )
            }
        </div>
        {
          basket?.length !==0 && (
            <div className={classes.subtotal}>
              <div>
                <p> Subtotal ({basket?.length} items)</p>
                <CurrencyFormat amount ={total} />
              </div>
              <span>
                <input type='checkbox'/>
                <small>This Order Contains a gift</small>
              </span>
              <Link to="/payments">continue to checkout</Link>
              </div>
          )
        }
        <div>

        </div>
    </section>
  )
}

export default Cart
