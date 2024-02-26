import { Link } from 'react-router-dom'
import '../styles/checkout.css'
// import { Link } from 'react-router-dom';
const Checkout = () => {
  return (
    <div className='checkout-div'>
      <div className='details-div'>
        <h1>CHECKOUT</h1>
        <div>
          <div className='billing-details'>
          <h4>BILLING DETAILS</h4>

                <div>
                <label>Name
                  <input type='text' id='name'/>
                </label>
                </div>
                <div>
                <label>Email
                  <input type='email' id='email'/>
                </label>
                </div>
                <div>
                <label>Phone Number
                  <input type='tel' id='tel'/>
                </label>
                </div>
          </div>

          <div className='shipping-info'>
          <h4>SHIPPING INFO</h4>

                <div>
                <label>Your Address
                  <input type='text' id='address'/>
                </label>
                </div>
                <div>
                <label>ZIP Code
                  <input type='text' id='zipcode'/>
                </label>
                </div>
                <div>
                <label>City
                  <input type='text' id='text'/>
                </label>
                </div>
                <div>
                <label>Country
                  <input type='text' id='text'/>
                </label>
                </div>
          </div>

          <div className='payment-details'>
          <h4>PAYMENT DETAILS</h4>

                <div>
                  <p>Payment Method</p>
                <label className='radio'>
                  <input type='radio' id='e-money'value= 'e-money'/>e-Money
                </label>
                </div>
                <div>
                  
                <label className='radio'>
                  <input type='radio' id='cash-on0delivery'value= 'cashOnDelivery'/>Cash on Delivery
                </label>
                </div>
               
                <div>
                <label>e-Money Number
                  <input type='number' id='e-money-number'/>
                  
                </label>
                </div>
                <div>
                <label>e-Money PIN
                  <input type='password' id='pin'/>
                </label>
                </div>
          </div>
        

        </div>
        
        
        
      </div>

      <div className='summary-div'>
        <h4>SUMMARY</h4>
        <div className='items-div'>
          <div className="item"></div>
        </div>
       
       <div>
        <div className='total'><h5>TOTAL</h5> <p>$ <span>5369</span></p></div>
        <div className='total'><h5>SHIPPING</h5> <p>$ <span>50</span></p></div>
        <div className='total'><h5>VAT (INCLUDED)</h5> <p>$ <span>1079</span></p></div>
        <div className='total'><h5>GRAND TOTAL</h5> <p className='g-total'>$ <span >5446</span></p></div>
       </div>
      </div>

      <Link to= '/ordersummary'>
      <button className="continue-btn">CONTINUE & PAY</button>
      </Link>
     
    </div>
  )
}

export default Checkout
