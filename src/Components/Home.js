import React from 'react'
import { CartContext } from '../Context/Context'
import Filter from './Filter';
import SingleProduct from './SingleProduct';

const Home = () => {
    const {state:{products}}=CartContext();
    console.log(products);
  return (
      <div style={{display:"flex",}}>
          <Filter/>
 <div style={{display:"flex",
 width:"78%",padding:"20px",flexWrap:"wrap",justifyContent:"space-around"}}>{
        products.map((prod)=>{
            return <SingleProduct prod={prod}/>
        })
    }</div>
      </div>
   
  )
}

export default Home