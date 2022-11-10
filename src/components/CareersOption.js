import React from 'react'
import Button from './Button/Button'
import { useState } from 'react'
function CareersOption({title, location}) {
  const [clicked, setClicked] = useState(false)
  const [sent, setSent] = useState(false)
  function closeContainer(e) {
    e.stopPropagation()
    if(e.target.className === "totalPriceContainer") {
      setClicked(false)
      setSent(false)
    } 
  }
  return (
    <section className="careers-option">
    <section className="careers-option__title">
      <span className="career-title">{title}</span>
      <span>{location}</span>
    </section>
    <button onClick={() => setClicked(true)} className='button' type='button'>Apply</button>
    {clicked !== false && <section onClick={closeContainer} className='totalPriceContainer'>
    { sent === false && <section className='message'>
      <h5>Message Us</h5>
     
      
      <input type="email" placeholder='Your email'></input>
      <textarea type="text" placeholder='Your message'></textarea>
      <button onClick={() => setSent(true)} type="button" className="button ">Send</button>
    </section>
    }
     
        
    {sent && <section className='thankyou'><h5>Thank you. We'll connect soon!</h5></section>} 
      </section>}
  </section>
  )
}

export default CareersOption