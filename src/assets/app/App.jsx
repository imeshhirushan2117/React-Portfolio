import './App.css'
import Navbar, { StickyNanbar } from '../component/Navbar/Navbar'
import Home from '../pages/HomePage/Home'
import AboutMe from '../pages/AboutMe/AboutMe'


function App() {


  return (
    <>

      <StickyNanbar title={'WELLCOME TO MY PORTFOLIO!'} />
      <Navbar />
      <Home />
      <AboutMe />
    </>
  )
}

export default App
