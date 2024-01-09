import './App.css'
import Navbar, { StickyNanbar } from '../component/Navbar/Navbar.jsx'
import Home from '../pages/HomePage/Home.jsx'
import AboutMe from '../pages/AboutMe/AboutMe.jsx'
import Service from '../pages/Service/Service.jsx'
import Skills from '../pages/Skills/Skills.jsx'
import Portfolio from '../pages/Portfolio/Portfolio.jsx'
import Contact from '../pages/Contact/Contact.jsx'
import Footer from '../pages/Footer/Footer.jsx'
import Standalone from '../pages/Standalone/Standalone.jsx'
import { useRef } from 'react';
import { Temp } from '../pages/Temp/Temp.jsx'
import BoostrapNav from '../component/BoostrapNav/BoostrapNav.jsx'

function App() {
  const home = useRef(null);
  const about = useRef(null);
  const service = useRef(null);
  const skills = useRef(null);
  const portfolio = useRef(null);
  const contact = useRef(null);



  const change = (val) => {
    console.log(val);
    if (val === 'home') {
      home.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (val === 'about') {
      about.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (val === 'service') {
      service.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (val === 'skills') {
      skills.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (val === 'portfolio') {
      portfolio.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (val === 'contact') {
      contact.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }


  return (
    <>
      <StickyNanbar title={'WELLCOME TO MY PORTFOLIO!'} />
      <BoostrapNav onChangeContent={(val) => change(val)} />

      <div ref={home}>
        <Home />
      </div>

      <div ref={about} >
        <AboutMe />
      </div>

      <div ref={service} >
        <Service />
      </div>

      <div ref={skills} >
        <Skills />
      </div>

      <div ref={portfolio} >
        <Portfolio />
      </div>

      <div ref={contact} >
        <Contact />
      </div>

      <Footer />
      {/* <Standalone />
      <Temp /> */}




    </>
  )
}

export default App
