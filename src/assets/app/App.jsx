import './App.css'
import Navbar, { StickyNanbar } from '../component/Navbar/Navbar'
import Home from '../pages/HomePage/Home'
import AboutMe from '../pages/AboutMe/AboutMe'
import Service from '../pages/Service/Service'
import Skills from '../pages/Skills/Skills'
// import { Route, Routes, Navigate } from 'react-router-dom'
import { Temp } from '../pages/Temp/Temp'

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
          <Service />
          <Skills />
         
        
          
      <Temp />

    </>
  )
}

export default App
