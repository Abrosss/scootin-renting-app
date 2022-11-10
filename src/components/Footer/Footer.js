import React from 'react'
import './Footer.css';
import FooterLogo from '../../assets/images/logofooter.svg';
import TwitterLogo from '../../assets/images/twitter.svg';
import FacebookLogo from '../../assets/images/facebook.svg';
import InstagramLogo from '../../assets/images/instagram.svg';
import AppStoreButton from '../Button/AppStoreButton'
import GooglePlayButton from '../Button/GooglePlayButton'
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
        <a href="/"><img alt='logo' src={FooterLogo}></img></a>
        <a className='nav-link' href="/about" >About</a>
        <a className='nav-link' href="/location">Location</a>
        <a className='nav-link' href="/careers">Careers</a>
        </nav>
       <section className='footer-socials'>
        <a href='https://www.facebook.com/' target="_blanc"><img alt='facebook logo' src={FacebookLogo}></img></a>
        <a href='https://twitter.com/' target="_blanc"><img alt='twitter logo' src={TwitterLogo}></img></a>
        <a href='https://instagram.com/' target="_blanc"><img alt='instagram logo' src={InstagramLogo}></img></a>
       </section>
        
      </div>
    </footer>
  )
}

export default Footer