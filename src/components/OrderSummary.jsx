// import React from 'react'
import { FaCheck } from "react-icons/fa";
import '../styles/ordersummary.css'
import { Link } from 'react-router-dom';

const OrderSummary = () => {
  return (
    <div className="main-order-div">
      <div className='order-div'>
        <div className='order-icon-div'>
        <FaCheck className="order-icon"/>
        </div>

        <div>
            <h1>THANK YOU FOR YOUR ORDER </h1>
            <p>You will receive an email confirmation shortly.</p>
        </div>

        <div>
            <div className="ordered-products">
                <div className="product-item">
                        <div className="main-item">

                        </div>
                        <hr/>
                        <p>and 2 other items</p>
                </div>
                
                
            </div>
            <div className="ordered-grand-total">
                <h4 className="order-grand-total">GRAND TOTAL</h4>
                <p className="order-grand-total-price">$5446</p>
            </div>

        </div>

        <Link to= '/home'>
      <button className="back-to-home-btn">BACK TO HOME</button>
      </Link>
      </div>
    </div>
  )
}

export default OrderSummary
