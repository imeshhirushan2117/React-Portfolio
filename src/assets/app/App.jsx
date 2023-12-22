import './App.css'
import Navbar, { StickyNanbar } from '../component/Navbar/Navbar'
import Home from '../pages/HomePage/Home'
import AboutMe from '../pages/AboutMe/AboutMe'
import Service from '../pages/Service/Service'

import { Temp } from '../pages/Temp/Temp'

function App() {


  return (
    <>

      <StickyNanbar title={'WELLCOME TO MY PORTFOLIO!'} />
      <Navbar />
      <Home />
      <AboutMe />
      <Service />
      <Temp />
    </>
  )
}

export default App
