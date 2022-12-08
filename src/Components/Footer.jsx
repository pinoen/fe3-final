import React from 'react'
import DHLogo from '../images/DH.png'
import facebook from '../images/ico-facebook.png'
import instagram from '../images/ico-instagram.png'
import tiktok from '../images/ico-tiktok.png'
import whatsapp from '../images/ico-whatsapp.png'

const Footer = () => {
  return (
    <footer>
      <p>Powered by</p><a href='https:/www.digitalhouse.com' target='_blank' rel="noreferrer"><img id='logoDH' src={DHLogo} alt='DH-logo' /></a>
      <div className='social'>
        <a href='https:/www.facebook.com' target='_blank' rel="noreferrer"><img src={facebook} alt='Facebook-icon' /></a>
        <a href='https:/www.instagram.com' target='_blank' rel="noreferrer"><img src={instagram} alt='Facebook-icon' /></a>
        <a href='https:/www.tiktok.com' target='_blank' rel="noreferrer"><img src={tiktok} alt='Facebook-icon' /></a>
        <a href='https:/www.whatsapp.com' target='_blank' rel="noreferrer"><img src={whatsapp} alt='Facebook-icon' /></a>
      </div>
    </footer>
  )
}

export default Footer
