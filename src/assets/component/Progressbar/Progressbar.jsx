import './styles.css'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { flushSync } from 'react-dom';


function Progressbar({ name, ptage }) {
    return (
        <>
            <div className='pr-div'>
                <p className='pg'>{name}</p>
                <ProgressBar style={{ height: '7px', backgroundColor: "black" }} className='p-bar' variant="success" animated now={ptage} />
            </div>
        </>
    )
}

export default Progressbar


export function MyCircularProgressbar({ cname, percentage }) {



    return (
        <div style={{ marginTop: '60px' }}>

            <div>
                <div className='cp'>
                    <div style={{width: '80px'}}>
                    <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        styles={buildStyles({
                            rotation: 0,
                            textSize: '15px',
                            pathTransitionDuration: 0.5,
                            pathColor: `rgba(75, 255, 165, ${percentage / 100})`,
                            textColor: '#4BFFA5',
                            trailColor: 'black',
                            backgroundColor: '#4BFFA5',

                        })}
                    />
                    </div>
                    <div className='pg1'>{cname}</div>
                </div>
            </div>

        </div>
    )
}