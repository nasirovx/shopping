import React from 'react'
import CartItem from '../Components/CartItem'

const Home = ({data, addToCard, title}) => {
  return (
    <div>
      <h1>{title} {title === "Главное" ? null : data.length}</h1>
      <div className="d-flex flex-wrap justify-content-between gap-4 mt-4">
        {
          data.map((product, index) => {
            return <CartItem key={index} onClick={() => addToCard(product.id)}
            children="Add To Cart" {...product} />
          })
        }
      </div>
    </div>
  )
}

export default Home
