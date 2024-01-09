import React from 'react'
import './styles.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import menu from '../../assets/img/icon/menu-bar.png'
import { IoMdMenu } from "react-icons/io";
export default function BoostrapNav({ onChangeContent }) {
    const menuImg = {menu};
    return (

        

        <>
            <Navbar expand="lg" className="nav-text-nav">
                <Container>
                    <Navbar.Brand  className='nav-hadder'><span style={{color:'white'}}>Imesh </span><span style={{ color: '#4BFFA5' }}> Hirushan</span></Navbar.Brand>
                

                    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{color:'#4BFFA5'}}>
                    <IoMdMenu/>
                    </Navbar.Toggle>
                    
                    <Navbar.Collapse id="basic-navbar-nav">
                     
                       <Nav className="me-auto nav-div-item">
                            <Nav.Link className='nav-list'  onClick={() => onChangeContent('home')}>Home</Nav.Link>
                            <Nav.Link className='nav-list'  onClick={() => onChangeContent('about')}>About</Nav.Link>
                            <Nav.Link className='nav-list'  onClick={() => onChangeContent('service')}>Service</Nav.Link>
                            <Nav.Link className='nav-list' onClick={() => onChangeContent('portfolio')}>Portfolio</Nav.Link>
                            <Nav.Link className='nav-list'  onClick={() => onChangeContent('contact')}>Contact</Nav.Link>
                        </Nav>
                       
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
