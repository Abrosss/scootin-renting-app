import React from 'react'
import Button from './Button'


function Hero() {
  return (
    <div className='container-hero'>
      <h1 className='container-hero__h1'>Scooter sharing made simple</h1>
      <p>Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and you’re away!</p>
      <Button text='Get Scootin'/>
    </div>
  )
}

export default Hero