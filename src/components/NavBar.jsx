import '../styles/navbar.css'
// import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Category from '../components/category';
// import CartOverlay from './CartOverlay';

const NavBar = () => {
  // const [cartVisible, setCartVisible] = useState(false);
  // const toggleCart = () => {
  //   setCartVisible(!cartVisible);
  // };

  return (
    <div className='nav-div'>
      
      <div>
      <div className='menu-overlay'>
      <Link to="/headphonespage">
            <Category
              CategoryName={'HEADPHONES'}
              imageSrc={"/resources/assets/shared/mobile/image-xx99-mark-one-headphones.jpg"}
              categoryClass='headphones'
              topPosition={120}
            />
          </Link>

          <Link to="/speakerspage">
            <Category
              CategoryName={'SPEAKERS'}
              imageSrc={"/resources/assets/shared/mobile/image-zx9-speaker.jpg"}
              categoryClass='speakers'
              topPosition={390}
            />
          </Link>

          <Link to="/earphonespage">
            <Category
              CategoryName={'EARPHONES'}
              imageSrc={"/resources/assets/shared/mobile/image-zx9-earphones.png"}
              categoryClass='earphones'
              topPosition={630}
            />
          </Link>
      </div>
      </div>
      <Link to={'/menuoverlay'}>
      <IoMenu className='nav-icon'/>
      </Link>
        

        <Link to={'/home'}>
        <h1>audiophile</h1>
        </Link>
        
        <Link to={'/cartoverlay'}>
        <AiOutlineShoppingCart className='nav-icon cart-home-icon'/>
        </Link>
        
        {/* {cartVisible && <CartOverlay onClose={toggleCart} />} */}
    </div>
  )
}

export default NavBar
