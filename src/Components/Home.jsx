import React from 'react'
import './Style.css';
import { Coding } from './Coding'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import photo from './photo.png'
import { Services } from './Services';
import { Header } from './Header';
import { Contact } from './Contact';

export const Home = () => {
  return (
    <div className='Main-home'>


        <Navbar/>
      <Header/>    
      <Footer/>
      
        
    </div>
  )
}
