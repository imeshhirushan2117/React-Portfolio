import './styles.css'
import Cad from '../../component/Cad/Cad'
import { BsFillDatabaseFill } from "react-icons/bs";
import { MdOutlineWebhook } from "react-icons/md";
import { TbDeviceMobileCode } from "react-icons/tb";

export default function Portfolio() {
    return (
        <div>
            <div className='service-container'>
                <h2 style={{marginTop:'-100px'}}>My <span style={{ color: '#4BFFA5' }}>Portfolio!</span></h2>


                <div className='cad-div-portfolio'>
                    <Cad icon={<BsFillDatabaseFill />} title={'Standalone'} pg={'Application'} />
                    <Cad icon={<MdOutlineWebhook />} title={'Web'} pg={'Application'} />
                    <Cad icon={<TbDeviceMobileCode />} title={'Mobile App'} pg={'Application'} />
                </div>

            </div>
        </div>
    )
}