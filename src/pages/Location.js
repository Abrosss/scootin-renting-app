
import NavBanner from "../components/NavBanner/NavBanner";

import Map from "../assets/images/world-map-mobile.png"
import { useState } from "react";
function Location() {
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
      <main className="container">
      <NavBanner text='Location'
      class='banner--careers'/>
      <section className="map">
        <img alt="map" className="map-picture" src={Map}></img>
        <div className="pinList">
        <div className="pin pin-1">New York</div>
        <div className="pin pin-2">London</div>
        <div className="pin pin-3">Jakarta</div>
        <div className="pin pin-4">Yokohama</div>
        </div>
      </section>
      <section className="location-info">
        <h4 className="location-info__title">Your city <br/> not listed?</h4>
        <p className="location-info__content">If you’d like to see Scoot in your hometown, be sure to let us know. We track requests and plan launches based on demand. Feel free to message us by clicking the link or messaging us on social.</p>
        <button onClick={() => setClicked(true)} type="button" className="button">Message Us</button>
      </section>
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
      </main>
    );
    
  }
  
  export default Location;
  