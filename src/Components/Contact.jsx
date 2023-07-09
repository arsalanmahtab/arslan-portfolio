
import React from 'react'
import { Navbar } from './Navbar'




export const Contact = () => {
  return (
   
      <div className='Contact-main'>
        <Navbar />
        <h1 style={{fontSize:"32px",fontWeight:"bold"}}>Contact Form</h1>

        <div className="form-details">
        <div class="mb-3">
    <h3 style={{display:"flex",marginBottom:"10px;",fontSize:"15px",fontWeight:"500",marginLeft:"10px"}}>  Name  </h3>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Arsalan Mahtab" required/>
</div> 
<div class="mb-3">
<h3 style={{display:"flex",marginBottom:"10px;",fontSize:"15px",fontWeight:"500",marginLeft:"10px"}}>  Email address </h3>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="arslan@example.com" required/>
</div> 
<div class="mb-3">
<h3 style={{display:"flex",marginBottom:"10px;",fontSize:"15px",fontWeight:"500",marginLeft:"10px"}}> Phone Number </h3>
  <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="123456789"/>
</div> 
<div class="mb-3">
<h3 style={{display:"flex",marginBottom:"10px;",fontSize:"15px",fontWeight:"500",marginLeft:"10px"}}> Enter Your Project Details </h3>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
</div>
        </div>

            <button type="button" className='button-submit'>Submit</button>



      </div>
  
  )
}
