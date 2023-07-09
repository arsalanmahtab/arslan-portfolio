import React, { useEffect } from 'react';
import photo from './photo.png'
import Transparent from './transparent.png'

import Typewriter from "typewriter-effect";
import { Contact } from './Contact';
// import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Style.css';

import reactimg from './react.png'
import angularimg from './angular.png'
import worpdressimg from './WordPress.png'
import shopifyimg from './shopify.png'
import todo from './todo.jpg'
import weather from './weather.png'
import blood from './blood.jpg'
import bookStore from './bookStore.jpg'
import shazam from './shazam.jpg'
import employee from './employee.jpg'
import user1 from './user1.jpg'
import user2 from './user2.jpg'


export const Header = () => {


  const options = {
    autoplay: true,
    autoplayTimeout: 3000, // Time until next slide starts (in ms)
    loop: true,
    margin: 30,
    responsiveClass: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
    }
};




  return (
    <div className='Header-main'>

      <div className='header'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 text-side' style={{ marginTop: "100px" }}>
              <div className="container">


                <h2 style={{ color: "white", fontSize: "40px" }}>Hi,i am 
                
                 {/* <span className='name' > Arsalan Mahtab </span> */}
                 </h2>

              
                <h1 className='bigFont' style={{ color: "#01BE96",fontSize:"50px",fontWeight:"bold"}}>
            <Typewriter
                options={{
                strings: ['Arsalan Mahtab','Frontend Developer.', 'Shopify Developer','Wordpress Developer'],
                autoStart: true,
                loop: true,
        }}
      />
            </h1>

                <div style={{ marginTop: "20px", marginBottom: "20px" }} className='social '>
                  <p style={{ color: "white", fontWeight: "bold" }}>Check Out My <span>
                    <a className='social-icons' href="https://www.instagram.com/"> <i class="fa-brands fa-instagram" ></i> </a>
                    <a className='social-icons' href="https://www.facebook.com/"> <i class="fa-brands fa-facebook"></i> </a>
                    <a className='social-icons' href="https://www.linkedin.com/in/arslan-mahtab/"> <i class="fa-brands fa-linkedin"></i> </a>
                    <a className='social-icons' href="https://github.com/arsalanmahtab"> <i class="fa-brands fa-github"></i> </a>
                     </span> </p>
                </div>

                {/* <button className='Button-talk' style={{backgroundColor:"rgb(1, 190, 150)",padding:"5px 22px",border:"none",borderRadius:"5px",color:"white",marginTop:"15px"}} >Lets Talk </button> */}

                <Link className='Button1'

                  to='/Contact'
                  style={{ marginTop: "20px" }}
                >
                  Lets Talk

                </Link>


              </div>


            </div>
            <div className='col-md-6 image-side'>
              <img src={photo} alt="photo" style={{ width: "400px" }} />
            </div>
          </div>
        </div>
      </div>


      <div style={{ marginTop: "20px" }}>

        <h1 style={{ fontSize: "30px", fontWeight: "bold" }}>What I've done?</h1>
        <p style={{ fontSize: "18px", marginTop: "10px", color: "gray", fontFamily: "auto" }}>I've done many projects in Frontend  React.js ,HTML, CSS and Javascript  or i have also done projects ins Shopify Or Wordpress <br />
          Here are few of them.</p>
      </div>

      <div>
        <img src={reactimg} alt="React" style={{width:"60px"}} />
        <img src={angularimg} alt="Angular" style={{width:"60px"}} />
        <img src={worpdressimg} alt="Wordpress" style={{width:"120px"}} />
        <img src={shopifyimg} alt="Shopify" style={{width:"60px"}} />
      </div>

      <div>
      {/* <OwlCarousel className='owl-theme' {...options} loop margin={10} >
    <div className='item'>
    <div className="facilities-column">
                <img src={bookStore} alt="Library..."/>
                <h3>
                    Online Books Store
                </h3>
                <p className="para">
                The online bookstore website is a responsive and dynamic e-commerce platform built with HTML, CSS, and JavaScript. This includes all the necessary files for front-end design, such as web pages, images, and stylesheets, as well as client-side scripting for interactive features. The site allows customers to browse and purchase books, and view their order history.
                </p>
            </div>
    </div>
    <div className='item'>
    <div className="facilities-column">
                <img src={blood} alt="basketball PG..."/>
                <h3>
                    Blood Bank App
                </h3>
                <p className="para">
                The Blood Bank website built using the MERN stack is a full-stack web application. The website allows users to register as donors or recipients, search for blood banks, and make blood requests or donations. The backend is built using Node.js and Express, with MongoDB as the database, while the frontend is built using React. The website also incorporates authentication ...
                </p>
            </div>
    </div>
    <div className='item'>
    <div className="facilities-column">
                <img src={todo} alt="Library..."/>
                <h3>
                    Todo App
                </h3>
                <p className="para">
                  The ToDo app allows users to create, read, update and delete tasks, and it includes features like user authentication, responsive design, and error handling. The code is well-organized, easy to follow and includes comments, making it easy for developers to understand and modify the code to fit their needs. This website contains the code for a ToDo app website built using the MERN stack. 
                </p>
            </div>
    </div>
    <div className='item'>
    <div className="facilities-column">
                <img src={employee} alt="Library..."/>
                <h3>
                    Employees Management System
                </h3>
                <p className="para">
                    The Employees Management System project in MERN is a web-based application designed to manage the employee data of a company. The system allows users to perform various tasks such as adding new employees, updating their information, deleting employee records. The front-end of the application is built using React, while the back-end is powered by Nodejs ...
                </p>
            </div>
    </div>
    <div className='item'>
    <div className="facilities-column">
                <img src={weather} alt="Library..."/>
                <h3>
                    Weather App
                </h3>
                <p className="para">
                The Weather App project in React is a web application that allows users to get the current weather conditions and forecast for any location. The app uses a weather API to fetch data and display it in a user-friendly format. The React framework allows for a responsive and dynamic user interface, with components that update in real-time as the user interacts with the app.
                </p>
            </div>
    </div>
    <div className='item'>
    <div className="facilities-column">
                <img src={shazam} alt="Library..."/>
                <h3>
                    Shazam App
                </h3>
                <p className="para">
                The Weather App project in React is a web application that allows users to get the current weather conditions and forecast for any location. The app uses a weather API to fetch data and display it in a user-friendly format. The React framework allows for a responsive and dynamic user interface, with components that update in real-time as the user interacts with the app.
                </p>
            </div>
    </div>
</OwlCarousel> */}
      </div>


      <div className="clients-section" style={{marginTop:"10px"}}>
          <h1 style={{ fontSize: "30px", fontWeight: "bold" }}>What my Clients Say?</h1>
          {/* <div className="row" style={{marginTop:"20px"}}>
            <div className="col-md-3">
                  <p style={{color:"gray"}}>
                  I was pleasantly surprised by how efficient and knowledgable he is regarding his field. He gets a 4 star from me as a developer.
                  </p>
                  <h1 style={{fontSize:"20px"}}>Christian Barley</h1>
                  <img src={user1} alt=""  style={{width:"30px"}}/>
            </div>
            <div className="col-md-3">
                  <p style={{color:"gray"}}>
                  I was pleasantly surprised by how efficient and knowledgable he is regarding his field. He gets a 4 star from me as a developer.
                  </p>
                  <h1 style={{fontSize:"20px"}}>Christian Barley</h1>
            </div>
          </div> */}

           <div className="row" style={{marginTop:"20px",justifyContent:"center"}}>
        <div className="testimonial-column" >
            <img src={user1} alt="User1..."/>
            <div>

                <p className="para">
                I was pleasantly surprised by how efficient and knowledgable he is regarding his field. He gets a 4 star from me as a developer.

                </p>
                <h3>
                    Christian Barley
                </h3>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-o"></i>
               
            </div>
        </div>
        <div className="testimonial-column" style={{marginLeft:"15px"}}>
            <img src={user2} alt="User1..."/>
            <div>

                <p className="para" >
                Arsalan Mahtab is a very talented and hard working guy. He solved my problems in a timely manner and is an excellent communicator.
                </p>
                <h3>
                    Paul Steve 
                </h3>
                <i className="fa fa-star" ></i>
                <i className="fa fa-star" ></i>
                <i className="fa fa-star" ></i>
                <i className="fa fa-star" ></i>
                <i className="fa fa-star-half-alt" ></i>
            </div>
        </div>
       
    </div>
      </div>


        <div>
        <section className="cta">
    <h1>
    Thank you for taking the time to review my portfolio.  
    </h1>
    <p className="para">
    If you have any questions or would like to discuss potential collaborations  or job opportunities,<br/> please feel free to contact me using the information provided. <br/>
    </p>
    
    <Link className='Button-Contact'

                  to='/Contact'
                  style={{ marginTop: "20px" }}
                >
                  Contact me

                </Link>
    
</section>
        </div>
      <div>

      </div>







    </div>
  )
}
