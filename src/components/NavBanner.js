import React from 'react'
import Dots from '../assets/images/white-circles.svg';
function NavBanner(props) {
  return (
    <section className={`banner ${props.class}`}>
                  <span>{props.text}</span>
                  <span className="dots"><img src={Dots}></img></span>
                </section>
  )
}

export default NavBanner