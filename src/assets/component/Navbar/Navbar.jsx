import './styles.css'




function Navbar(props) {
    return (


        <div className='main-navbar'>
          <div className='main-name'>
          <h1><span style={{color:'#FFFFFF'}}>Imesh</span> Hirushan</h1>
          </div>
           <div className='nav-item'>
            <a   href="#">Home</a>
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