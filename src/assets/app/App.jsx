import './App.css'
import Navbar,{StickyNanbar} from '../component/Navbar/Navbar'
import Temp from '../component/Temp/Temp'

function App() {


  return (
    <>

    <StickyNanbar title={'WELLCOME TO MY PORTFOLIO!'}/>
    <Navbar/>
    <Temp/>
    </>
  )
}

export default App
