import './styles.css'




function Navbar(porps){
    return(
        <div className='main-navbar'>
          
        </div>
    )
}

export default Navbar

export function StickyNanbar(props){
    return(
        <div className={'sticky'}>
            <h1 className='fonts'>{props.title}</h1>
        </div>
    )
}