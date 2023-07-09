import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.png'
import './Style.css';
import resume from '../Public/Resume.pdf'

export const Navbar = () => {
  return (
    <div classNameName='Navbar-main'>
            <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"> Coding Pixel</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">


        <li className='li'>
        <a className="nav-link" href="#" style={{fontSize:"15px"}}>
        <Link className="nav-item"
             to="/"
        >
          Home
        </Link>
        </a>
        </li>

      <li className='li'>
      <a className="nav-link" href="#" style={{fontSize:"15px"}}>
        <Link 
        className="nav-item"
        to="/About"
        >
            About
        </Link>
        </a>
        </li>

        <li className='li'>
        <a className="nav-link" href="#" style={{fontSize:"15px"}}>
        <Link className="nav-item"
         to="/Services"
        >

         Services

        </Link>
        </a>
        </li>

        <li className='li'>
        <a className="nav-link" href="#" style={{fontSize:"15px"}}>
        <Link className="nav-item"
         to="/Contact"
        
        >
         Contact
        </Link>
          </a>
        </li>


        <li className='li'>
       
          <a className="nav-link" href={resume} style={{fontSize:"15px"}}> <Link className="nav-item">Download My Resume </Link> </a>
        
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>



    </div>
  )
}
