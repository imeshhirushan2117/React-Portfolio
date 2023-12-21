import './styles.css'
import menu from '../../img/icon/menu-bar.png'


function Navbar() {
    return (
        <div className='main-navbar'>
          <div className='main-name'>
          <h1><span style={{color:'#FFFFFF'}}>Imesh</span> Hirushan
          <img className='menu-icon' src={menu} alt="menu"/>
          </h1>
          </div>
           <div className='nav-item'>
            <a className='active'  href="#">Home</a>
            <a  href="#">About</a>
            <a  href="#">Service</a>
            <a href="#">Skills</a>
            <a  href="#">Portfolio</a>
            <a  href="#">Contact</a>
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