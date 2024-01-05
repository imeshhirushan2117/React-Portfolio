import './styles.css'
function TextInput ({placeholder,type,height}){
    return(
        <div>
           <input style={{height:height}} type={type} class="input-field" placeholder={placeholder}/>
        </div>
    )
} export default  TextInput

export function Textarea({placeholder,height}){
    return(
        <div>
            <textarea style={{height:height}} class="input-field"  placeholder={placeholder}></textarea>
        </div>
    )
}

