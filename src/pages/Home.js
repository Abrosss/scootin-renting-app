




import Telemetry from '../components/Telemetry/Telemetry';
import HeroBanner from '../components/HeroBanner/HeroBanner';
function Home() {
  return (
    <div className='container'>
      <HeroBanner/>
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
