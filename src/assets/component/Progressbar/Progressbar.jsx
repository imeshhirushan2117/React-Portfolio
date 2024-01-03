import './styles.css'
import ProgressBar from 'react-bootstrap/ProgressBar';

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