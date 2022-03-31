import React, { useEffect, useState } from 'react'
import bluewash from "../images/bluewash.png"
import whitewash from "../images/whitewash.png"
import blueiron from "../images/blueiron.png"
import whiteiron from "../images/whiteiron.png"
import bluepress from "../images/bluepress.png"
import whitepress from "../images/whitepress.png"
import bluefold from "../images/bluefold.png"
import whitefold from "../images/whitefold.png"
import "../orders/Product_lists.css"

function Product_type_lists(props) {   
     const [wash,setwash]=useState(false)
    const [iron,setiron]=useState(false)
    const [press,setpress]=useState(false)
    const [fold,setfold]=useState(false)
    const [quantity,setquantity]=useState(0)
    const [price,setprice]=useState('---')
    const [cancel,setcancel]=useState(false)
  
    const Calculate_product_data=()=>{
      var Each_cost=0
      if (wash){
        Each_cost+=parseInt(quantity)*20

      }
      if (press){
        Each_cost+=parseInt(quantity)*15
      }
      if (iron){
        Each_cost+=parseInt(quantity)*25
        console.log(Each_cost,quantity)
      }
      if (fold){
        Each_cost+=parseInt(quantity)*10
      }
        setprice(Each_cost)
      console.log(price)

    }
    
    const changeWash=  ()=>{
  setwash(!wash)
      if (!wash){
          setcancel(true)
      }
  
    }
    const changeIron= ()=>{
  setiron(!iron)
        console.log(iron)
        if (!iron){
            setcancel(true)
        }
    
 
    }
    const changePress= ()=>{
    setpress(!press)
        if (!press){
            setcancel(true)
        }
      
     
    }
    const changeFold=   ()=>{
      setfold(!fold)
     
        if (!fold){
            setcancel(true)
        }
      
    
        
    }
  
    const chageAlltype=()=>{
        setwash(false)
        setiron(false)
        setfold(false)
        setprice('---')
        setpress(false)
        setcancel(false)
        setquantity(0)
    }
  
    useEffect(()=>{
      Calculate_product_data()

      props.gettingOrders({
        productType:props.productType,
        value:{
          quantity:quantity,
          wash:wash,
        ironing:iron,
        Folding:fold,
        Packing:press,
        price:price}
      })
 
    })
  return (

      <tr className="table-body">
        <td className="product-name-img">
          <div className="product-img">
            <img width={40} height={38} src={props.image} />
          </div>
          <div className="product-name-des">
            <h3>{props.productname}</h3>
            <p>{props.description}</p>
          </div>
        </td>
        <td>
          <input  type='number' value={quantity} onChange={(e)=>{setquantity(e.target.value)}} width={10} />
        </td>
        <td>
          <img
            onClick={changeWash}
            width={20}
            height={22}
            src={wash ? bluewash : whitewash}
          />
        </td>
        <td>
          <img
            onClick={changeIron}
            height={22}
            src={iron ? blueiron : whiteiron}
          />
        </td>
        <td>
          <img
           onClick={changeFold}
            height={22}
            src={fold ? bluefold : whitefold}
          />
        </td>
        <td>
          <img
              onClick={changePress}
            height={22}
            src={press ? bluepress : whitepress}
          />
        </td>
        <td>{price}</td>
        <td>{cancel?<button onClick={chageAlltype}>Reset</button>:" "}</td>
      </tr>
   
  );
}

export default Product_type_lists;
