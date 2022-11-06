
import NavBanner from "../components/NavBanner/NavBanner";
import Button from "../components/Button/Button"
import Map from "../assets/images/world-map-mobile.png"
function Location() {
    return (
      <div className="container">
      <NavBanner text='Location'
      class='banner--careers'/>
      <section className="map">
        <img className="map-picture" src={Map}></img>
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
        <Button text="Message us"/>
      </section>
      </div>
    );
    
  }
  
  export default Location;
  