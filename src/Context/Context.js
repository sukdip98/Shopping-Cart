import faker from "@faker-js/faker";
import { createContext,useContext, useReducer } from "react";
import { cartReducer } from "./Reducer";

const Cart=createContext();
faker.seed(99);
const Context=({children})=>{
    const products=[...Array(20)].map(()=>({
        id:faker.datatype.uuid(),
        name:faker.commerce.productName(),
        price:faker.commerce.price(),
        image:faker.image.fashion(),
        stocks:faker.random.numeric(),
        rating:faker.random.numeric(),
        fastDelivery:faker.datatype.boolean
    }));
    console.log(products);
    const[state,dispatch]=useReducer(cartReducer,{
        products:products,
        cart:[]
    })
   return <Cart.Provider value={{state,dispatch}}>{children}</Cart.Provider>
}
export default Context;
export const CartContext=()=>{
    return useContext(Cart)
}