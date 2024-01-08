import './styles.css'
import menu from '../../assets/img/icon/menu-bar.png'
import { Row } from 'react-bootstrap'


function Navbar({ onChangeContent }) {
    return (
        <div className='main-navbar'>
            <div className='main-name'>

                <div className='text-div'>
                    <h1 className='nav-text'><span style={{ color: '#FFFFFF' }}>Imesh</span> Hirushan </h1>

                    <img className='menu-icon' src={menu} alt="menu" />

                </div>

            </div>
            <div className='nav-item'>
                <a className='active' onClick={() => onChangeContent('home')} >Home</a>
                <a className='' onClick={() => onChangeContent('about')}>About</a>
                <a className='' onClick={() => onChangeContent('service')}>Service</a>
                <a className='' onClick={() => onChangeContent('skills')}>Skills</a>
                <a className='' onClick={() => onChangeContent('portfolio')}>Portfolio</a>
                <a className='' onClick={() => onChangeContent('contact')}>Contact</a>
            </div>
        </div>
    )
}

export default Navbar

export function StickyNanbar(props) {
    return (
        <div className={'sticky'}>
            <h1 className='fonts'>{props.title}</h1>
        </div>
    )
}