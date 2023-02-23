import React from 'react'
import './services.css'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Services = () => {
  const location = useLocation();
  

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");
  return (
    <div className='container service-content'>
        <div>
            <div>
                <p className='service_header'>Services Provided</p>
                <p>At our company, we offer a wide range of services to help our customers achieve their goals and solve their challenges. Our services are designed to be flexible, scalable, and customized to meet the unique needs of each customer.</p>
                <p>Consulting and Planning: We work closely with our customers to understand their needs and challenges, and develop a customized plan to meet their objectives. Our consulting services are designed to provide expert guidance on technology, business processes, and operations.</p>
                <p>Design and Development: We specialize in designing and developing innovative solutions using the latest technologies. Our team of experts has the skills and experience to develop custom software applications, websites, mobile apps, and more.</p>
                <p>Testing and Quality Assurance: We understand the importance of delivering high-quality solutions to our customers. That's why we offer comprehensive testing and quality assurance services to ensure that our products and services meet the highest standards of quality.</p>
                <p>Integration and Implementation: We provide end-to-end integration and implementation services to ensure that our solutions work seamlessly with our customers' existing systems and processes. Our team works closely with our customers to ensure that the implementation process is smooth and hassle-free.</p>
                <p>Training and Education: We offer a range of training and education services to ensure that our customers have the skills and knowledge they need to use our solutions effectively. Our training programs are designed to be flexible, so our customers can choose the training that best fits their needs and schedule.</p>
                <p>At our company, we are committed to delivering the highest quality services to our customers. We are dedicated to continuous improvement and are always looking for ways to enhance our services and provide greater value to our customers.</p>
                <li className='linking'><Link className={splitLocation[1] === "contact-us" ? "active" : ""}  to='/contact-us'>Discover our solutions</Link></li>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default Services