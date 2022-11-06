import { Link } from "react-router-dom";
import Button from '../Button/Button'
import {ReactComponent as YourSvg} from '../menu.svg'
import {ReactComponent as Cross} from '../../assets/images/cross.svg'
import Logo from '../../assets/images/logo.svg';
import './Header.css';
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
function Header() {
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

 function proportion() {
  return Math.floor(elemHeight * 100 / height) 
 }

    return (
      <div ref={navRef} className="header">
       {activeMenu ? <Cross onClick={() => setActiveMenu(!activeMenu)} className="burger"/>  : <YourSvg onClick={() => setActiveMenu(!activeMenu)} className="burger"/>
        }
        <nav>
        <Link to="/"><img src={Logo}></img></Link>
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link" to="/location">Location</Link>
        <Link className="nav-link" to="/careers">Careers</Link>
        </nav>
        <Button text='Get Scootin'/>
        <section style={{top:proportion() + "%"}}  className={activeMenu ? "burgerMenu show" : "burgerMenu"}>
          <section className="burgerContent">
          <nav>
        <a className="nav-link" href="/about">About</a>
        <a className="nav-link" href="/location">Location</a>
        <a className="nav-link" href="/careers">Careers</a>
        </nav>
        <Button text='Get Scootin'/>
          </section>
        </section>
      </div>
    );
  }
  
  export default Header;
  