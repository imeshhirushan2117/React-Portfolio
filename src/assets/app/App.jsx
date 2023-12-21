import './App.css'
import Navbar,{StickyNanbar} from '../component/Navbar/Navbar'
import Temp from '../component/Temp/Temp'
import Home from '../pages/HomePage/Home'



function App() {


  return (
    <>

    <StickyNanbar title={'WELLCOME TO MY PORTFOLIO!'}/>
    <Navbar/>
    <Home/>




    <Temp/>
    </>
  )
}

export default App
