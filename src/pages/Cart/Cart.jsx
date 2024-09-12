import React, { useContext } from 'react'

function Cart() {
  const [{basket,user},dispatch] = useContext(DataContext)
  return (
    <div>
      cart page
    </div>
  )
}

export default Cart
