import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { Services } from './Services';
import { Navbar } from './Navbar';
import { Tabone } from './Tabone';
import { Tabtwo } from './Tabtwo';
import { Tabthree } from './Tabthree';

export const Navigation = () => {
  return (
   
    <>
    
    <Router>
        <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/About' element={<About/>} />
                    <Route path='/Contact' element={<Contact/>} />
                    <Route path='/Services' element={<Services/>} />
                    <Route path='/Tabone' element={<Tabone/>} />
                    <Route path='/Tabtwo' element={<Tabtwo/>} />
                    <Route path='/Tabthree' element={<Tabthree/>} />


                    
                    
                    </Routes>    
    </Router>

    </>

    



   
  )
}
