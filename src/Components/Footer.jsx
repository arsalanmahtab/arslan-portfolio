import React from 'react'
import {Link} from 'react-router-dom'


export const Footer = () => {
  return (
    <div>
        <div className="row" style={{justifyContent:"space-between"}}>
            <div className="col-md-4">Copyright © 2023 Arsalan Portflio. All rights reserved.</div>
            <div className="col-md-4">
                <p>
                    <span>
            <a className='social-icons-footer' href="https://www.instagram.com/"> <i class="fa-brands fa-instagram" ></i> </a>
                    <a className='social-icons-footer' href="https://www.facebook.com/"> <i class="fa-brands fa-facebook"></i> </a>
                    <a className='social-icons-footer' href="https://www.linkedin.com/in/arslan-mahtab/"> <i class="fa-brands fa-linkedin"></i> </a> 
                    <a className='social-icons-footer' href="https://github.com/arsalanmahtab"> <i class="fa-brands fa-github"></i> </a> </span> </p>
            </div>
        </div>
    </div>
  )
}
