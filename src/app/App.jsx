import './App.css'
import Navbar, { StickyNanbar } from '../component/Navbar/Navbar.jsx'
import Home from '../pages/HomePage/Home.jsx'
import AboutMe from '../pages/AboutMe/AboutMe.jsx'
import Service from '../pages/Service/Service.jsx'
import Skills from '../pages/Skills/Skills.jsx'
// import { Route, Routes, Navigate } from 'react-router-dom'
import { Temp } from '../pages/Temp/Temp.jsx'
import Portfolio from '../pages/Portfolio/Portfolio.jsx'
import Contact from '../pages/Contact/Contact.jsx'


function App() {
  return (
    <>
      <StickyNanbar title={'WELLCOME TO MY PORTFOLIO!'} />
      <Navbar />
      {/* <Routes>
        <Route path={'*'} element={<Navigate to={'/home'}/>}></Route>
        <Route path={'/home'} element={<Home />} />
        <Route path={'/aboutme'} element={<AboutMe />} />
        <Route path={'/service'} element={<Service />} />
        <Route path={'/skills'} element={<Skills />} />
      </Routes> */}


          <Home />
          <AboutMe />
          <Service/>
          <Skills />
          <Portfolio />
          <Contact />
          
        
          
      <Temp />

    </>
  )
}

export default App
