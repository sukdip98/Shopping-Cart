import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { CartContext } from '../Context/Context'
import Rating from './Rating'
const SingleProduct = ({prod}) => {
  const {state:{cart},dispatch}=CartContext();
  return (
    <div style={{width:"30%",margin:10}}>
      <Card>
<Card.Img src={prod.image} alt={prod.name}/>
<Card.Body>
  <Card.Title>{prod.name}</Card.Title>
  <Card.Subtitle style={{paddingButtom:10}}>
    <span><span>&#8377;</span>{prod.price.split(".")[0]}</span>
    <div>
    {prod.fastDelivery?<span>Fast Delivery</span>:<span>Four days Delivery</span>}

    </div>
    <div>
      <Rating rating={prod.rating}/>
    </div>
  </Card.Subtitle>
  {
    cart.some(p=>p.id===prod.id)?  <Button style={{marginTop:"5px"}} onClick={()=>dispatch({type:"REMOVE_FROM_CART",payload:prod,})} variant="danger">Remove from Cart</Button>
:  <Button style={{marginTop:"5px"}} disabled={!prod.stocks} onClick={()=>dispatch({type:"ADD_TO_CART",payload:prod,})}>Add to Cart</Button>

  }
</Card.Body>
      </Card>
    </div>
  )
}

export default SingleProduct