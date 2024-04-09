import React from 'react'
import CartItem from '../Components/CartItem'

const Cart = ({cart, deleteToCart}) => {
  return (
    <div>
      <div className="d-flex flex-wrap justify-content-between">
        {
          cart.map((product, index) => {
            return <CartItem key={index} onClick={() => deleteToCart(index)}
            children='delete to cart' {...product} />
          })
        }
      </div>
    </div>
  )
}

export default Cart
