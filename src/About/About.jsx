import React from 'react'
import Navbar from '../Components/Navbar'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Contact from './Contact'
import Footer from '../Components/Footer'

const About = () => {
  return (
    <div className='font-[Nunito] select-none'>
        <Navbar/>
        <Page1/>
        <Page2/>
        <Page3/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default About