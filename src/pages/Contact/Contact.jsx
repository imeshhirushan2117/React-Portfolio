import './styles.css'
// import TextInput from '../../component/TextInput/TextInput'
import TextInput from '../../component/TextInput/TextInput.jsx';
import { Textarea } from '../../component/TextInput/TextInput.jsx';
import Button from '../../component/Button/Button.jsx'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Contact() {
    return (
        <div>
            <div className='main-contact-div'>
                <h2>Contact <span style={{ color: "#4BFFA5" }}>Me!</span> </h2>

                <Container style={{marginTop:'40px'}}>
                    <Row>
                        <Col sm={6}><TextInput height={'40px'} placeholder={'Full Name'} type={'text'} /></Col>
                        <Col sm={6}><TextInput height={'40px'} placeholder={'Email Address'} type={'text'} /></Col>
                    </Row>
                    <Row>
                        <Col sm={6}> <TextInput height={'40px'} placeholder={'Mobile Number'} type={'text'} /></Col>
                        <Col sm={6}> <TextInput height={'40px'} placeholder={'Subject'} type={'text'} /></Col>
                    </Row>
                    
                    <Row className='textArea'>
                        <Col sm={12}> <Textarea  height={'200px'}  placeholder={'Your Massage'} /></Col>
                    </Row>

                    <Row>
                        <Col className='btnCol' sm={12}>
                            <Button name={'Send Message'} />
                        </Col>
                    </Row>
                </Container>

            </div>
        </div>
    )
} export default Contact