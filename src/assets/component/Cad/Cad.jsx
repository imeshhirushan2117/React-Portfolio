import './styles.css'
import Button from '../Button/Button'



function Cad(props) {
    return(
      <div className='cad-component'>
          <div className='icon' >
          {props.icon}
          </div>
          <h2>{props.title}</h2>
          <p>{props.pg}</p>
          <div className='btn-div'>
          <Button className='cad-btn' name={'Read More'} width={'80%'} />
          </div>
      </div>
    )
}
export default Cad