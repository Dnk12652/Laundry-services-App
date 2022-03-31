import React from 'react'
import {  Link } from 'react-router-dom'
import "../commanComponent/order_confirm.css";
import tick from "../images/tick.jpg"

function OrderConfirm(props) {
    const goToOrders = () => {
        props.handleConfirmationPopup();
      }

  return (
    <div className='popup-box'>
    <div className='confirmation__box'>
        <div className='confirmation__header'>
            <div className='box__image'>
                <img className='tick' src={tick} alt = "tick"/>
            </div>
        </div>

        <div className='confirmation__content'>
            <div className='confirmation__title'>Your order is  successfully created</div>
    
            <div className='confirmation__message'>You can track the delivery in the "Orders" section</div>
            <div className='button__confirmation'>
                <Link to="/orderPage">
            <button className = "go__button" onClick={goToOrders} >Go To Orders</button>
            </Link>
            </div>
        </div>

    </div>
</div>
  )
}

export default OrderConfirm