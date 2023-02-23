import React from 'react'
import './about.css'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const AboutUsContent = () => {
  const location = useLocation();
  

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");
  return (
    <div className='container about-container'>
        <div>Who we are?</div>
        <div>
            <p>Welcome to our website! We are a team of passionate individuals dedicated to providing high-quality products/services to our customers. Our company was founded with a vision to deliver excellence in every aspect of our business, from customer service to product development.</p>
            <p>We take great pride in our work and strive to exceed our customers' expectations at every opportunity. Our team consists of experts in their respective fields, who are committed to delivering the best possible experience to our customers.</p>
            <p>At our core, we believe in honesty, integrity, and transparency. We value our customers and work hard to earn their trust by providing them with products/services that are reliable, efficient, and effective.</p>
            <p>We are constantly innovating and improving to ensure that our products/services are always up-to-date with the latest technologies and trends. Our goal is to make a positive impact on our customers' lives and businesses, and we are committed to achieving that through our products/services.</p>
            <h4>Thank you for visiting our website, and we hope you will choose us for your needs.</h4>
            <li><Link className={splitLocation[1] === "contact-us" ? "active" : ""}  to='/contact-us'>Discover our products and services</Link></li>
        </div>
    </div>
  )
}

export default AboutUsContent