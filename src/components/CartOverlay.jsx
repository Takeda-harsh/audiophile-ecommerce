import '../styles/cartoverlay.css'
import { Link } from 'react-router-dom';

const CartOverlay = () => {
  return (
    <div className="cart-overlay">
      <div className="cart-content">
        <div className='cart-headers'> 
          <h3>CART (3)</h3> 
          <p>Remove all</p>
          </div>
          <div>
          <div className='added-items'>
            <div className='item'>
              <div><img src='../resources/assets/product-yx1-earphones/mobile/image-product.jpg'/></div>
              <div className='name-price'><h4>XX99 MK II</h4>
              <p>$2,999</p>
              </div>
              <div className='item-qty'>
                <span>-</span> 
              <p>1</p>
              <span>+</span> 
              </div>
            </div>
            <div className='item'>
              <div><img src='../resources/assets/product-yx1-earphones/mobile/image-product.jpg'/></div>
              <div className='name-price'><h4>XX99 MK II</h4>
              <p>$2,999</p>
              </div>
              <div className='item-qty'>
                <span>-</span> 
              <p>1</p>
              <span>+</span> 
              </div>
            </div>
            <div className='item'>
              <div><img src='../resources/assets/product-yx1-earphones/mobile/image-product.jpg'/></div>
              <div className='name-price'><h4>XX99 MK II</h4>
              <p>$2,999</p>
              </div>
              <div className='item-qty'>
                <span>-</span> 
              <p>1</p>
              <span>+</span> 
              </div>
            </div>
          </div>

          <div className='total-div'>
            <div className='total'>
              <h4>TOTAL</h4>
              <p>$ 5,396</p>
            </div>
            <Link to= '/checkout'>
            <div className='checkout-btn'>CHECKOUT</div>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartOverlay
