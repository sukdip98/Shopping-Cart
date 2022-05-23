import React from 'react'
import { Container, Dropdown, FormControl, Navbar,Nav,Badge } from 'react-bootstrap'
import { icons } from 'react-icons';
import {BsFillCartFill} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/Context';
import {MdDeleteForever} from 'react-icons/md';
const Header = () => {
    const {state,dispatch}=CartContext();
  return (
      <Navbar bg="dark" variant="dark" style={{height:80}}>
      <Container>
          <Navbar.Brand>
              <Link style={{textDecoration:"none",color:"inherit"}} to="/">Shopping Cart</Link>
          </Navbar.Brand>
          <Navbar.Text>
              <FormControl style={{width:500}}placeholder="Search a product"
            className="m-auto"/>
          </Navbar.Text>
          <Nav>
              <Dropdown alignRight >
                  <Dropdown.Toggle variant="success">
                      <Link to="/cart" style={{textDecoration:"none",color:"inherit"}}>
                      <BsFillCartFill fontSize="25px"/>

                      </Link>
                      <Badge>{state.cart.length}</Badge>
                  </Dropdown.Toggle>
                  <Dropdown.Menu style={{minWidth:"15vw"}} >
                      {
                          state.cart.length===0?<span style={{padding:10}}>Cart is Empty!</span>:
                        state.cart.map((prod)=>(
                            <Dropdown.Item>{prod.name} <MdDeleteForever onClick={()=>dispatch({type:"REMOVE_FROM_CART",payload:prod})} fontSize="20px" color="red"/> </Dropdown.Item>
                        ))
                      }
                  </Dropdown.Menu>
              </Dropdown>
          </Nav>
      </Container>
      </Navbar>
  )
}

export default Header