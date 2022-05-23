import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Rating from './Rating';

const Filter = () => {
    const [rate,setRate]=useState(0);
  return (
    <div style={{backgroundColor:"grey",color:"white",padding:"20px",display:"flex",gap:"5vh",flexDirection:"column",width:"20%",margin:"10px",height:"86vh"}}>
        <span style={{fontSize:"30px"}}>Filter Products</span>
        <span>
        <Form.Check inline label="Ascending" name="group1" type="radio" id={`inline-1`}/>

        </span>
        <span>
        <Form.Check inline label="Descending" name="group1" type="radio" id={`inline-2`}/>

        </span>
        <span>
        <Form.Check inline label="Include out of Stocks" type="checkbox" name="group1" id={`inline-3`}/>

        </span>
        <span>
            <label>Rating</label>
            <Rating rating={rate} onClick={(i)=>setRate(i+1)}/>
        </span>
        <Button variant="light">Clear Filter</Button>
    </div>
  )
}

export default Filter