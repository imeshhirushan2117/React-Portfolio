import './styles.css'

function Button(props){
    return(
        <div>
            <button className="btn" style={{width: props.width}}>
            {props.name}
         </button>
        </div>
    )
}

export default Button