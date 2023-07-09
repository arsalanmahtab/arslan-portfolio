import React from 'react'
import { Navbar } from './Navbar'; 
import './Style.css';


export const Services = () => {
  return (

      <>
    <Navbar/>

    <div className="container-fluid services-section">
      <div className="row">
       
        <div className="col-md-4 col-auto">
        <div className='text-area' style={{marginTop:"61px"}}> 
            <h2 style={{fontFamily:"cursive",fontSize:"50px",fontWeight:"bold"}}>Services</h2>
            </div>
          
        </div>

        <p style={{fontWeight:"bold",fontSize:"15px",marginTop:"10px"}}>As a frontend developer, my expertise lies in React.js for building responsive and scalable web applications. I have experience in developing and customizing Shopify stores, as well as working with WordPress for website development.</p>
        
            
            </div>
    </div>
    <div className='Services'>



            {/* <div className='container' style={{textAlign:"start",marginTop:"20px"}}>
              
              <h6 style={{color:"black",fontSize:"25px"}}>  My <span style={{color:"rgb(1, 190, 150)",fontSize:"25px"}}>Services</span> </h6>
                <h3 style={{color:"black",fontSize:"15px"}}>What I Do</h3>
   
            </div> */}

            <div className='container' style={{marginTop:"-100px"}}>
                <div className='row' style={{justifyContent:"center"}}>
                    <div className='col-md-3 service-box'>
                    <i class="fa-solid fa-code fa-xl" style={{color: "#01be96",marginTop:"30px"}}></i>
                    <h4 >Frontend Developer</h4>
                    <p > I am a frontend developer with one year of experience, I have developed a strong foundation in HTML, CSS, JavaScript, and React JS. 
                         
                       </p>
                    
                    </div>
                    <div className='col-md-3 service-box' >
                    <i class="fa-brands fa-shopify fa-xl" style={{color: "#01be96",marginTop:"30px"}}></i>
                        <h4 >Shopify Developer</h4>
                        <p >I am a Shopify developer with one year of experience, I have a strong background in developing custom Shopify themes and applications using HTML, CSS, JavaScript, and Liquid. 
                           </p>
                    </div>
                    <div className='col-md-3 service-box'  >
                    <i class="fa-brands fa-wordpress fa-xl" style={{color: "#01be96",marginTop:"30px"}}></i>
                        <h4 style={{fontSize:"22px"}} >Wordpress Developer </h4>
                        <p >I am a WordPress developer with one year of experience, I am proficient in developing custom WordPress themes and plugins using HTML, CSS, JavaScript, and PHP.
                              </p>
                    </div>
                </div>
            </div>

            <div className="main-choose">
            <div stlye={{marginTop:"30px"}}>
              <h1 style={{fontSize:"25px",fontWeight:"bold",marginTop:"40px"}}>WHY CHOOSE ME </h1>
            </div>

            <div className="row" style={{marginTop:"15px"}}>
              <div className="col-md-6">
                  <div className="container-fluid">
                  <div className="row">
                      <div>
                       <h2 style={{fontSize:"20px",fontWeight:"bold"}}>Completed on Right Time</h2>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Rem laboriosam, soluta voluptate, quod dolore facilis iusto eligendi</p>
                       </div>

                       
                       
                  </div>
                  </div>

                  <div className="container-fluid" style={{marginTop:"15px"}}>
                  <div className="row">
                      <div>
                       <h2 style={{fontSize:"20px",fontWeight:"bold"}}>Completed on Right Time</h2>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Rem laboriosam, soluta voluptate, quod dolore facilis iusto eligendi</p>
                       </div>


                       
                  </div>
                  </div>

              </div>
              <div className="col-md-6">

              <div className="container-fluid">
                  <div className="row">
                      <div>
                       <h2 style={{fontSize:"20px",fontWeight:"bold"}}>Completed on Right Time</h2>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Rem laboriosam, soluta voluptate, quod dolore facilis iusto eligendi</p>
                       </div>


                       
                  </div>
                  </div>

                  <div className="container-fluid" style={{marginTop:"15px"}}>
                  <div className="row">
                      <div>
                       <h2 style={{fontSize:"20px",fontWeight:"bold"}}>Completed on Right Time</h2>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Rem laboriosam, soluta voluptate, quod dolore facilis iusto eligendi</p>
                       </div>


                       
                  </div>
                  </div>
              
              </div>
            </div>

           
            </div>


        

    </div>

    </>
  )
}
