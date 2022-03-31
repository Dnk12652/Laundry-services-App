import React,{useEffect} from 'react'
import './Calculationcomponent.css'

function Calculationcomponent(props) {
  let totPrice = props.price
  let qnt = props.quantity
  let modeCost = totPrice/qnt
  if (props.quantity){
  return (
    <>
    <div className='newwinnerchild'>

        <div className='newtypes'>
          {props.productType}
        </div>
        <pre>                        </pre>
        <div className='modes'>
            {props.wash && <span>washing,</span>}
            {props.ironing && <span>pressing,</span>}
            {props.Folding && <span>folding,</span>}
            {props.Packing && <span>packing</span>}
        </div>
        <pre>                  </pre>
        
        <span>{props.quantity}</span>
        <pre> </pre>
        <span>X</span>
        <pre> </pre> 
        <span>{modeCost} </span>
        <pre> </pre>
        <span>=</span>
        <pre> </pre>
        <span>{props.price}</span>
        <hr className="hline"></hr>
        </div>
  </>
  )
}

else{
  return(
    <></>
  )
}
}

export default Calculationcomponent