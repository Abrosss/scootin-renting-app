import { Link } from "react-router-dom";
import Button from '../Button/Button'
import ButtonSubmit from "../ButtonSubmit/ButtonSubmit";
import {ReactComponent as YourSvg} from '../menu.svg'
import {ReactComponent as Cross} from '../../assets/images/cross.svg'
import Logo from '../../assets/images/logo.svg';
import './Header.css';
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import AuthContext from '../../context/AuthProvider'
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
function Header() {
  const {auth, setAuth} = useContext(AuthContext)
  const navigate = useNavigate()
  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  };
  
  const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
    window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return windowDimensions;
  };
  const { height, width } = useWindowDimensions();
  const [activeMenu, setActiveMenu] = useState(false)
  const [elemHeight, setElemHeight] = useState(0)
  const navRef = useRef(null)

  useEffect(() => {
    setElemHeight(navRef.current.clientHeight)
  })
function handleLogout(e) {
  e.preventDefault()
 
  setAuth(null)
    localStorage.clear()
    navigate('/')
  
}
 function proportion() {
  return Math.floor(elemHeight * 100 / height) 
 }

    return (
      <div ref={navRef} className="header">
       {activeMenu ? <Cross onClick={() => setActiveMenu(!activeMenu)} className="burger"/>  : <YourSvg onClick={() => setActiveMenu(!activeMenu)} className="burger"/>
        }
        <nav>
       {auth ? <Link to="/dashboard"><img src={Logo}></img></Link> : <Link to="/"><img src={Logo}></img></Link>} 
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link" to="/location">Location</Link>
        <Link className="nav-link" to="/careers">Careers</Link>
        </nav>
        <div className="logout">
          {auth && <Link className="nav-link" to="/rides">My account</Link>}
        
        {auth ? <button type="button" className="button button--nobackground " onClick={handleLogout}>Logout</button>
        
      :
         <Button  link="/signin" text="Get Scootin"/> 
        
        
      }
        </div>
        <section style={{top:proportion() + "%"}}  className={activeMenu ? "burgerMenu show" : "burgerMenu"}>
          <section className="burgerContent">
          <nav>
        <a className="nav-link" href="/about">About</a>
        <a className="nav-link" href="/location">Location</a>
        <a className="nav-link" href="/careers">Careers</a>
        </nav>
        <Button link="/signin" text='Get Scootin'/>
          </section>
        </section>
      </div>
    );
  }
  
  export default Header;
  