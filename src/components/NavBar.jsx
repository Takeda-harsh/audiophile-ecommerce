import '../styles/navbar.css'
// import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
// import CartOverlay from './CartOverlay';

const NavBar = () => {
  // const [cartVisible, setCartVisible] = useState(false);
  // const toggleCart = () => {
  //   setCartVisible(!cartVisible);
  // };

  return (
    <div className='nav-div'>
      
        <IoMenu className='nav-icon'/>
        <h1>audiophile</h1>
        <Link to={'/cartoverlay'}>
        <AiOutlineShoppingCart className='nav-icon'/>
        </Link>
        
        {/* {cartVisible && <CartOverlay onClose={toggleCart} />} */}
    </div>
  )
}

export default NavBar
