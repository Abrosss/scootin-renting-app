import React from 'react'
import './HeroBanner.css';
import Dots from '../../assets/images/white-circles.svg';
import Button from "../../components/Button/Button";

function HeroBanner() {
  return (
    <section className="banner banner--home">
    <section className="banner--home__text">
                  <h1>Scooter sharing made simple</h1>
                  <p>Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and you’re away!</p>
                  <Button link="/signin" class="button button--home button--banner" text="Get Scootin"/>
                  <span className="dots--home"><img src={Dots} alt=""></img></span>
                  </section>
                </section>
  )
}

export default HeroBanner