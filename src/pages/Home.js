


import Dots from '../assets/images/white-circles.svg';
import Button from "../components/Button";
import Telemetry from '../components/Telemetry';

function Home() {
  return (
    <div className='container'>
   <section className="banner banner--home">
    <section className="banner--home__text">
                  <h1>Scooter sharing made simple</h1>
                  <p>Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and you’re away!</p>
                  <Button class="button--home button--banner" text="Get Scootin"/>
                  <span className="dots--home"><img src={Dots}></img></span>
                  </section>
                </section>
            <section class="middle">
        
            <div class="line">
            <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
            </div>
          
            <section class="stages">
                <div>
                   
                    <h4>Locate with app</h4>
                    <p>Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away. </p>
                </div>
                <div>
                  
                    <h4>Pick your scooter</h4>
                    <p>We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost.</p>
                </div>
                <div>
                 
                    <h4>Enjoy the ride</h4>
                    <p>Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps.</p>
                </div>
            </section>
       
        </section>
      <Telemetry/>

    </div>
  );
}

export default Home;
