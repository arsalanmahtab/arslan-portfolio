import React from 'react'
import { useEffect, useRef } from 'react';
import { useLocation} from 'react-router-dom';
import { Link } from 'react-router-dom'

// import logo from './logo.png'
import './Style.css';
import logo from './navLogo1.png'
import resume from '../Public/Resume.pdf'

export const Navbar = () => {


  // let myRef = React.createRef();
  // const location = useLocation();
  //  const ref = useRef(null);
  //  function showMenu(){
  //       myRef?.current?.style.right = "0";
  //       myRef?.current?.style.transition = "1s"
  //   }
  //   function closeMenu(){
  //       myRef?.current?.style.right = "-200px";
  //       myRef?.current?.style.transition = "1s"
  //   }

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
  
      element.scrollIntoView({ behavior: 'smooth' });
      // closeMenu()
    }
  }

  // useEffect(() => {
  //   if (location.hash == '#service') {
  //     ref.current.scrollIntoView({ behavior: 'smooth' });
  //   }
  //   closeMenu()
  // }, [location]);


  return (
    <div classNameName='Navbar-main'>
            <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="#"> Coding Pixel</a> */}
    <img src={logo} alt="" style={{width:"10%"}} />
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
        <Link className='nav-item' onClick={scrollToServices}> SERVICES </Link>
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
