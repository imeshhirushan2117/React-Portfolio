import './styles.css'
import { BsCalendarEventFill } from "react-icons/bs";

function Educad(props) {
    return (
        <div className='eduCad-div'>

          <div style={{ display: 'flex' }}>
                <div class="circle-dot"></div>

                <div className='cd-div'>
                    <h5><BsCalendarEventFill />{props.date}</h5>
                    <h4 className='fonts'>{props.title}</h4>
                    <p className='fonts'>{props.prg}</p>
                </div>
            </div>
        </div>
    )
}
export default Educad