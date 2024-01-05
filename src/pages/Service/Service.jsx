import './styles.css'
import Cad from '../../component/Cad/Cad.jsx'
import { TbDeviceDesktopCog } from "react-icons/tb";
import { FaCode } from "react-icons/fa6";
import { FaMobileScreen } from "react-icons/fa6";



function Service({ title }) {
    return (
        <>
            <div className='service-container'>
                <h2>My <span style={{ color: '#4BFFA5' }}>Services!</span></h2>


                <div className='cad-div'>
                    <Cad icon={<TbDeviceDesktopCog />} title={'Standalone'} pg={'High-quality development of sites at the professional level.'} />
                    <Cad icon={<FaCode />} title={'Web'} pg={'High-quality development of sites at the professional level.'} />
                    <Cad icon={<FaMobileScreen />} title={'Mobile App'} pg={'High-quality development of sites at the professional level.'} />
                </div>

            </div>
        </>
    )
}
export default Service