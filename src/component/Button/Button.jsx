import './styles.css'

function Button(props){
    return(
        <div>
            <button className="main-btn" style={{width: props.width}}>
            {props.name}
         </button>

         
        </div>
    )
}

export default Button