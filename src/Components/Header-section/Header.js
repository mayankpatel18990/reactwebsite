import React,{useEffect} from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';


const Header = () => {
  const location = useLocation();
  

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");
  const [windowDimension, setWindowDimension] = useState(null);
  const [menuDisplay, setMenuDisplay] = useState(false);
  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);
  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 640;

  return (  
  <div className='container'>
    {isMobile? (
        <div className='header-section'>
           {menuDisplay?"":( <><button className='menu_button' onClick={()=>setMenuDisplay(true)}><img alt="mobile menu" src={"https://img.icons8.com/external-others-inmotus-design/67/null/external-Menu-basic-elements-others-inmotus-design.png"} /></button></>)}
            {menuDisplay?(
            <>
            <button className='menu_button_close' onClick={()=>setMenuDisplay(false)}><img alt="mobile menu" src={"https://img.icons8.com/windows/32/null/delete-sign.png"} /></button>
            <ul>
              <li><Link className={splitLocation[1] === "" ? "active" : ""} to='/' onClick={()=>setMenuDisplay(false)}>Home</Link></li>
              <li><Link className={splitLocation[1] === "about-us" ? "active" : "" } to='/about-us' onClick={()=>setMenuDisplay(false)}>About</Link></li>
              <li><Link className={splitLocation[1] === "services" ? "active" : ""} to='/services' onClick={()=>setMenuDisplay(false)}>Services</Link></li>
              <li><Link className={splitLocation[1] === "contact-us" ? "active" : ""} to='/contact-us' onClick={()=>setMenuDisplay(false)}>Contact-US</Link></li>
            </ul>
            </>
            ):""} 
        </div>
            ):<div className='header-section'>
            <ul>
                <li><Link className={splitLocation[1] === "" ? "active" : ""}  to='/' >Home</Link></li>
                <li><Link className={splitLocation[1] === "about-us" ? "active" : ""}  to='/about-us'>About</Link></li>
                <li><Link className={splitLocation[1] === "services" ? "active" : ""}  to='/services'>Services</Link></li>
                <li><Link className={splitLocation[1] === "contact-us" ? "active" : ""}  to='/contact-us'>Contact-US</Link></li>
                {/* <li><a>Book Now</a></li> */}
            </ul>
            </div>
            }
  </div>
  )
};
export default Header;
