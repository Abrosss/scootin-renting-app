import React from 'react'

import { Link } from 'react-router-dom'
import Button from './Button'
import Logo from '../assets/images/logo.svg';
import FooterLogo from '../assets/images/logofooter.svg';
import TwitterLogo from '../assets/images/twitter.svg';
import FacebookLogo from '../assets/images/facebook.svg';
import InstagramLogo from '../assets/images/instagram.svg';
import AppStoreButton from './AppStoreButton'
import GooglePlayButton from './GooglePlayButton'
function Footer() {
  return (
    <footer>
      <section className='footer-top'>
        <section><h4>Sign up and <br/> Scoot off today</h4></section>
        <section className='footer-downloads'>
        <GooglePlayButton/>
         <AppStoreButton/>
        
        </section>
      </section>
      <div className="footer-bottom">
        <nav>
        <Link to="/"><img src={FooterLogo}></img></Link>
        <Link className='nav-link' to="/about">About</Link>
        <Link className='nav-link' to="/location">Location</Link>
        <Link className='nav-link' to="/careers">Careers</Link>
        </nav>
       <section className='footer-socials'>
        <a href='https://www.facebook.com/' target="_blanc"><img src={FacebookLogo}></img></a>
        <a href='https://twitter.com/' target="_blanc"><img src={TwitterLogo}></img></a>
        <a href='https://instagram.com/' target="_blanc"><img src={InstagramLogo}></img></a>
       </section>
        
      </div>
    </footer>
  )
}

export default Footer