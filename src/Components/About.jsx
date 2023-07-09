import React from 'react'
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider, LegacyCard, LegacyTabs, Tabs } from '@shopify/polaris';
import { useState, useCallback } from 'react';
import { Navbar } from './Navbar'
import { Link } from 'react-router-dom'
import photo2 from './blue-image.png'
import Transparent from './transparent.png'
import './Style.css';
export const About = () => {

  




  return (

    <div className="about-main">
      <Navbar />

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5" style={{ background: " #01be96" }}>
            <img src={Transparent} alt="photo" width="362px" />
          </div>
          <div className="col-md-7" style={{ background: "#fff" }}>

            <h2 style={{ fontSize: "33px", fontWeight: "bold", fontFamily: "cursive", marginTop: "20px" }}>About Us</h2>
            <p style={{ marginTop: "50px", fontSize: "18px", fontFamily: "system-ui" }}>Welcome to Coding Pixel! I'm a talented front-end developer specializing in visually stunning and user-friendly websites. With over 2 years of experience, I create impactful digital experiences that leave a lasting impression.

              I believe in the power of well-executed designs to elevate your brand and engage your audience. I offer expertise in various technologies, ensuring your website is both visually appealing and highly functional.

              I prioritize your satisfaction by working closely with you, understanding your vision and goals. Together, we'll create a tailored website that perfectly aligns with your objectives.

              Browse through my portfolio to see examples of successful projects, ranging from sleek corporate websites to captivating e-commerce platforms. Let's connect and bring your ideas to life. Get in touch today to create a portfolio website that showcases your unique talents and captivates your audience.</p>

                            <button className='talk-button' style={{marginTop:"35px",padding:"7px 22px",background: "#01be96",border:"none",borderRadius:"7px"}}> <a href="/Contact" className='talk' > Lets Talk </a>  </button>
          </div>
        </div>
      </div>

    </div>

  )
}
