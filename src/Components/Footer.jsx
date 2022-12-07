import React from 'react'
import DHLogo from '../images/DH.png'
import facebook from '../images/ico-facebook.png'
import instagram from '../images/ico-instagram.png'
import tiktok from '../images/ico-tiktok.png'
import whatsapp from '../images/ico-whatsapp.png'

const Footer = () => {
  return (
    <footer>
      <p>Powered by</p><img src={DHLogo} alt='DH-logo' />
      <div className='social'>
        <img src={facebook} alt='Facebook-icon' />
        <img src={instagram} alt='Instagram-icon' />
        <img src={tiktok} alt='Tiktok-icon' />
        <img src={whatsapp} alt='Whatsapp-icon' />
      </div>
    </footer>
  )
}

export default Footer
