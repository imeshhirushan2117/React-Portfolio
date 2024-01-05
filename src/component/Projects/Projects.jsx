import './styles.css'
import Button from '../Button/Button';
import Card from 'react-bootstrap/Card';

export default function Projects({title,text,img}) {
  return (
    <div>       
      <Card className='project-cad'>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title className='card-title'>{title}</Card.Title>
        <Card.Text className='card-text'>{text}</Card.Text>
       <div className='project-btn'>
       <Button  name={'Go Project'} width={'100%'}/>
       </div>
      </Card.Body>
    </Card>
    </div>
  )
}
