import React from 'react'
import { Card } from 'react-bootstrap';
import { CartContext } from '../Context/Context'

const Cart = () => {
  const{state,dispatch}=CartContext();
  return (
    <div>
      {
        state.cart.length===0?<h3>Empty Cart!</h3>:
        state.cart.map((prod)=>(
          <Card>
            <Card.Body>
              <div>
                <Card.Img src={prod.image} style={{width:"12%",height:"12%",marginLeft:"10px"}}/>
              </div>
              <Card.Title>{prod.name}</Card.Title>
              <Card.Subtitle>
                <span>Price:{prod.price.split(".")[0]}</span> <br/>
                <span>Qty:{prod.qty}</span>
              </Card.Subtitle>
            </Card.Body>
          </Card>
        ))
      }
    </div>
  )
}

export default Cart