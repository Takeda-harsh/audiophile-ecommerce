import '../styles/footer.css'
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='bar'></div>
      <div className='logo'></div>
      <div className='links'>
        <span>HOME</span>
        <span>HEADPHONES</span>
        <span>SPEAKERS</span>
        <span>EARPHONES</span>
      </div>

      <div className='about'>
        <p>
        Audiophile is an all in one stop to fulfill your audio needs. We&apos;re a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we&apos;re open 7 days a week.
        </p>
      </div>

      <div className='copyright'>
        <p>Copyright 2021. All Rights Reserved</p>
        <div className='socials'>
        <IoLogoFacebook />
        <FaTwitter />
        <FaInstagram />
        </div>
      </div>
    </div>
  )
}

export default Footer
