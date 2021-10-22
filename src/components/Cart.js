import React,{useState} from "react";
import Products from "../data";
import Item from "./Item";


const Cart = () => {

 const [item, setitem] = useState(Products)
  return (
    <>
    {item.map((e)=>{
     return  <Item key={e.id} {...e} />
    })}
    </>
  );
};

export default Cart;
