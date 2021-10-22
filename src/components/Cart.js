import React,{useState} from "react";
import Products from "../data";
import Header from "./Header";
import Item from "./Item";


const Cart = () => {

 const [item, setitem] = useState(Products)
  return (
    <>
    <Header />
    {item.map((e)=>{
     return  <Item key={e.id} {...e} />
    })}
    </>
  );
};

export default Cart;
