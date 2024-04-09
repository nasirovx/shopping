import React from 'react'
import  Button  from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ReactStars from 'react-stars'

const CartItem = (props) => {
    const {images, title, description, brand, price, rating, onClick, children} = props;
    const imageSource = images && images.length > 0 ? images[0] : '';
  return (
    <div>
      <Card style={{width: "18rem"}}>
        <Card.Img className='img' variant='top' src={imageSource}/>
        <Card.Body>
            <div className='title d-flex gap-2 justify-content-between'>
                <Card.Title>{title}</Card.Title>
                <Card.Title>{brand}</Card.Title>
            </div>
            <div className='description'>
                <Card.Text>{description}</Card.Text>
            </div>
            <ReactStars count={5} size={24} color2={"#ffd700"} value={rating}/>
            <div className='btn d-flex align-items-center justify-content-between'>
                <span className='price'>{price}$</span>
                <Button onClick={onClick} variant='primary'>
                    {children}
                </Button>
            </div>
        </Card.Body>
      </Card>
    </div> 
  )
}

export default CartItem
 