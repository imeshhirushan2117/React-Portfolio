import './styles.css'
import Cad from '../../component/Cad/Cad'
import { TbDeviceDesktopCog } from "react-icons/tb";
import { FaCode } from "react-icons/fa6";
import { TbDeviceMobileCode } from "react-icons/tb";



function Service(){
return(
    <>
    <div className='service-container'>
    <h2>My <span style={{color:'#4BFFA5'}}>Services!</span></h2>
   

    <div className='cad-div'>
        <Cad icon={<TbDeviceDesktopCog/>} title={'Standalone'} pg={'High-quality development of sites at the professional level.'}/>
        <Cad icon={<FaCode/>} title={'Web'} pg={'High-quality development of sites at the professional level.'}/>
        <Cad icon={<TbDeviceMobileCode/>} title={'Mobile App'} pg={'High-quality development of sites at the professional level.'}/>
        
  
    </div>
    
    </div>
    </>
)
}
export default Service