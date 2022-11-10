import React from 'react'
import Button from '../Button/Button'
import './Telemetry.css'
import { Link } from 'react-router-dom'
function Telemetry() {

  return (
    <>
    <div className='telemetry '>
      <section className='telemetry__section'>
        <h4>Easy to use riding telemetry</h4>
        <p>The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.</p>
        <Link to="/about#faq" className="button button--option">Learn more</Link>
      </section>
      <section className='telemetry__section telemetry-right-arrow'>
        <section className='picture picture--telemetry'></section>
      </section>
    </div>
    <div className='telemetry telemetry-reverse' >
    <section className='telemetry__section '>
      <h4>Coming to a city near you</h4>
      <p>Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.</p>
      <Link to="/about#faq" className="button button--option">Learn more</Link>
    </section>
    <section className='telemetry__section telemetry-left-arrow'> 
      <section className='picture picture--near-you'></section>
    </section>
  </div>
  <div className='telemetry'>
  <section className='telemetry__section'>
    <h4>Zero hassle payments</h4>
    <p>Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.</p>
    <Link to="/about#faq" className="button button--option">Learn more</Link>
  </section>
  <section className='telemetry__section telemetry-right-arrow-short'>
    <section className='picture picture--payments'></section>
  </section>
</div>
</>
  )
}

export default Telemetry