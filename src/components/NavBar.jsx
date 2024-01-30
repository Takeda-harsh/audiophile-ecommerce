import '../styles/navbar.css'
import { IoMenu } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";

const NavBar = () => {
  return (
    <div className='nav-div'>
      
        <IoMenu className='nav-icon'/>
        <h1>audiophile</h1>
        <AiOutlineShoppingCart className='nav-icon'/>
   
    </div>
  )
}

export default NavBar
