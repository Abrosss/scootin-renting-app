import Button from "../components/Button";
import NavBanner from "../components/NavBanner";
import CareersOption from "../components/CareersOption";
function Careers() {
    return (
      <div className="container">
      <NavBanner text='Careers'
      class='banner--careers'/>
     <div className='telemetry'>
      <section className='telemetry__section'>
        <h4>Care to join our mission?</h4>
        <p>We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!</p>
        <Button class="button--option" text='Say Hello'/>
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
      <CareersOption title={"General Manager"} location={"Jakarta, Indonesia"}/>
      <CareersOption title={"UI/UX Designer"} location={"Yokohama, Japan"}/>
      <CareersOption title={"Blog Content Copywriter"} location={"New York, United States"}/>
      <CareersOption title={"Graphic Designer"} location={"New York, United States"}/>
      <CareersOption title={"Fleet Supervisor"} location={"Jakarta, Indonesia"}/>
      <CareersOption title={"UX Analyst"} location={"London, United Kingdom"}/>
      </section>
    </div>
    );
  }
  
  export default Careers;
  