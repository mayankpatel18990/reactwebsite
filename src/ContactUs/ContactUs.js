import React from 'react'
import { useState } from 'react';
import './contactus.css'

const ContactUs = () => {

  return (
    <div className='container'>
      <div>
        <div>
            <h2>Get in Touch with Us</h2>
            <h3>We're here to help. Whether you're interested in our products, services, or just have a question, we're always ready to assist you.</h3>
            <p>You can reach us at +91-999-999-9999, or by email at test@email.com. Our office is open from 10AM-5PM. If you prefer, you can also use the contact form below to send us a message.</p>
            <div>
              <h3>Address</h3>
              <p>India. </p>
            </div>
            <div>
              <h3>Email</h3>
              <a href='test@email.com'>test@email.com</a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs