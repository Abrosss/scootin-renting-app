import { Link } from "react-router-dom";
import Button from "./Button";
import {ReactComponent as YourSvg} from './menu.svg'
import Logo from '../assets/images/logo.svg';
function Header() {
    return (
      <div className="header">
        <YourSvg className="burger"/>
        <nav>
        <Link to="/"><img src={Logo}></img></Link>
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link" to="/location">Location</Link>
        <Link className="nav-link" to="/careers">Careers</Link>
        </nav>
        <Button text='Get Scootin'/>
        
      </div>
    );
  }
  
  export default Header;
  