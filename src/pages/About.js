import { useState } from "react";
import NavBanner from "../components/NavBanner/NavBanner";

function About() {
      const [active, setActive] = useState(null)
      const content = [
            {
                  title: "How do I download the app?",
                  content: "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page."
            },
            {
                  title: "Can I find a nearby Scoots?",
                  content: "Definitely! Simply open up the app and allow us to find your location while using it. We'll show you all of the closest Scoots and some extra useful information."
            },
            {
                  title: "Do I need a license to ride?",
                  content: "Yup! We provide information inside the app regarding local laws and the license you need to be able to ride our Scoots."
            },
            {
                  title: "Should I wear a helmet?",
                  content: "Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting."
            },
            {
                  title: "How about the rules & regulations?",
                  content: "Now is not the time to be a rule breaker. Be sure you're complying with all local laws and regulations. Also, just be a good human being. Be sure not to park your Scoot where it can block access to buildings or get in people's way."
            },
            {
                  title: "What if I damage my scoot?",
                  content: "Be sure to read our terms and conditions carefully. Not the most fun job we know but we make it as clear as possible. There's an option to add insurance for each trip, or you can sign up for annual insurance if you're a regular Scooter."
            },
      ]
      const toggle = (i) => {
            if (active === i)
                  return setActive(null)
            setActive(i)

      }

      return (
            <main className="container">
                  <NavBanner text='About'
                        class='banner--about' />

                  <div className='telemetry'>
                        <section className='telemetry__section'>
                              <h4>Mobility for the digital era</h4>
                              <p>Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips.</p>
                        </section>
                        <section className='telemetry__section'>
                              <section className='picture picture--digitalera telemetry-right-arrow-upward'></section>
                        </section>
                  </div>
                  <div className='telemetry telemetry-reverse' >
                        <section className='telemetry__section'>
                              <h4>Better urban living</h4>
                              <p>We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride.</p>

                        </section>
                        <section className='telemetry__section telemetry-left-arrow'>
                              <section className='picture picture--betterliving'></section>
                        </section>
                  </div>
                  <h2>Our values</h2>
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
                  <h2>FAQs</h2>
                  <section className="faqs">

                        <section className="faqs__content">
                              <h5 id="faq" >How it works</h5>
                              <section className="questions">
                                    {content.slice(0, 3).map((section, i) => (
                                          <section>
                                                <h6 className={i === active ? "rotate" : ""} onClick={() => toggle(i)}> {section.title}</h6>
                                                <p className={i === active ? "show" : ""}>{section.content}</p>
                                          </section>
                                    ))}

                              </section>
                        </section>
                        <section className="faqs__content">
                              <h5>Safe Driving</h5>
                              <section className="questions">
                                    {content.slice(3).map((section, i) => (

                                          <section>
                                                <h6 onClick={() => toggle(i + 3)}> {section.title}</h6>
                                                <p className={i + 3 === active ? "show" : ""}>{section.content}</p>
                                          </section>
                                    ))}
                              </section>
                        </section>
                  </section>
            </main>
      );
}

export default About;
