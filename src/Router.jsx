import React from 'react'
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import Landing from './pages/Landing/Landing'
import SignUp from './pages/Auth/SignUp'
import Payment from './pages/Payment/Payment'
import Cart from './pages/Cart/Cart'
import Orders from './pages/Orders/Orders'
import LayOut from './Layout/LayOut'
import Results from './pages/Results/Results'
import ProductDetail from './pages/ProductDetail/ProductDetail'
function Routing() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<LayOut />}>
          <Route path="/" element = {<Landing />}/>
          <Route path = "/auth" element = {<SignUp />} />
          <Route path = "/payments" element = {<Payment />} />
          <Route path = "/orders" element = {<Orders />} />
          <Route path = "/category/:categoryName" element = {<Results />} />
          <Route path = "/products/:productId" element = {<ProductDetail />} />
          <Route path = "/cart" element = {<Cart/>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default Routing
