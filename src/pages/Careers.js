
import NavBanner from "../components/NavBanner/NavBanner";
import CareersOption from "../components/CareersOption";
import { useState } from "react";
function Careers() {
  const [clicked, setClicked] = useState(false)
  const [sent, setSent] = useState(false)
  function closeContainer(e) {
    e.stopPropagation()
    if (e.target.className === "totalPriceContainer") {
      setClicked(false)
      setSent(false)
    }
  }
  return (
    <main className="container">
      <NavBanner text='Careers'
        class='banner--careers' />
      <div className='telemetry'>
        <section className='telemetry__section'>
          <h4>Care to join our mission?</h4>
          <p>We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!</p>
          <button onClick={() => setClicked(true)} class="button button--option" >Say Hello</button>
        </section>
        <section className='telemetry__section'>
          <section className='picture picture--join-us telemetry-right-arrow'></section>
        </section>
      </div>
      <h2>Why join us?</h2>
      <section className="values">
        <section className="values-cards">
          <section className="card">
            <div className="card__image card__image--tech">

            </div>
            <h5>Our tech</h5>
            <p>We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!</p>
          </section>
          <section className="card">
            <div className="card__image card__image--integrity"></div>
            <h5>Our integrity</h5>
            <p>We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.</p>
          </section>
          <section className="card">
            <div className="card__image card__image--community"></div>
            <h5>Our community</h5>
            <p>We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.</p>
          </section>
        </section>
      </section>
      <section className="careers">
        <CareersOption title={"General Manager"} location={"Jakarta, Indonesia"} />
        <CareersOption title={"UI/UX Designer"} location={"Yokohama, Japan"} />
        <CareersOption title={"Blog Content Copywriter"} location={"New York, United States"} />
        <CareersOption title={"Graphic Designer"} location={"New York, United States"} />
        <CareersOption title={"Fleet Supervisor"} location={"Jakarta, Indonesia"} />
        <CareersOption title={"UX Analyst"} location={"London, United Kingdom"} />
      </section>
      {clicked !== false && <section onClick={closeContainer} className='totalPriceContainer'>
        {sent === false && <section className='message'>
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

export default Careers;
