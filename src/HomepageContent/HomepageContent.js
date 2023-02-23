import React, { useState } from 'react';
import PackageData from './PackageData'
import './HomepageContent.css'
import locationImages from './locationImages'

const HomepageContent = () => {
    const[carddata, setcarddata] = useState(PackageData)
    // const[imageData, setimageData] = useState(locationImages)
  return( 
    <div>
      <div className='container'>
        <div className='package-card-holder'>
          {carddata.map((currentElem, index) =>{
            return(
            <div key={currentElem.id} className="package-card">
              <div className='package-img' >
                <img src={currentElem.image}></img>
              </div>
              <div className='package-data'>{currentElem.name}</div>
            </div>
            )
          })}

        </div>
      </div>
      <div className='container'>
        <div className='our-history-container'>
        <div className='amazing-things'><p>Who we are?</p></div>
        <div className='our-history'>
          <p>We are a company dedicated to providing high-quality products/services to our customers. Our team consists of experts in various fields who are passionate about delivering excellence in every aspect of our business.Our mission is to help our customers achieve their goals and solve their challenges through our innovative products/services. We pride ourselves on being customer-centric and strive to exceed our customers' expectations at every opportunity. Transparency, honesty, and integrity are the values that define us. We believe in building long-term relationships with our customers based on trust and mutual respect. Our commitment to these values has earned us a reputation as a trusted and reliable partner in the industry. We are constantly investing in the latest technologies and trends to ensure that our products/services are always up-to-date and deliver the best possible experience to our customers. We are dedicated to continuous improvement and are always looking for ways to enhance our products/services and provide greater value to our customers.</p>
        </div>
        </div>
      </div>
      <div className='container'>
        <div className='our-history-container who_we_are'>
          <div className='amazing-things'><p>What we do?</p></div>
          <div className='our-history'>
            <p>At our company, we offer a range of products/services to meet the needs of our customers. Our offerings are designed to help our customers achieve their goals and solve their challenges in a variety of industries and domains. Our product line includes innovative solutions that are built using the latest technologies and are designed to enhance efficiency, productivity, and profitability. Whether it's software applications, hardware solutions, or specialized tools, we provide our customers with the tools they need to succeed. Our services are tailored to meet the unique needs of each customer, and we offer a range of services that cover the entire project lifecycle. From consulting and planning to design, development, testing, and support, we are with our customers every step of the way.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageContent;
