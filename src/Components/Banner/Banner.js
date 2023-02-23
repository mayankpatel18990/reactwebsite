import React from 'react';
import './banner.css';
import { useLocation } from 'react-router-dom';

const Banner = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  return (
    <div className='container banner-content'>
      <div className={splitLocation[1] !== "" ? "no-homepage" : "Homepage"}>
          <div>
            <h3>Welcome to</h3>
            <h1>ReacWebsite</h1>
            </div>
        </div>
        <div><h1>{(splitLocation[1] === "about-us") ? splitLocation[1] : (splitLocation[1] === "services") ? splitLocation[1] : (splitLocation[1] === "contact-us") ? splitLocation[1] : (splitLocation[1] === "") ? "" : "Page not found"}</h1></div>
    </div>
  );
};

export default Banner;
