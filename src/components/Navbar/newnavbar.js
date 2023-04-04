import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import inst_logo from '../../Assets/inst_logo.jpg'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineSearch } from 'react-icons/ai'
import Hero from '../HeroSection/hero'
import "./newnavbar.css"

const Newnavbar = () => {
  return (
    <div className='outerdiv'>
        <div>
      <Navbar>
        <Container>
          <Nav className="mx-auto">
            <Nav.Link href="#home" className="navlink" style = {{color:"white", paddingleft:"30px" ,paddingright:"30px"}}>Home</Nav.Link>
            <Nav.Link href="#Department" style = {{color:"white", paddingleft:"30px" ,paddingright:"30px"}}>Department</Nav.Link>
            <Nav.Link href="#Academics" style = {{color:"white", paddingleft:"30px" ,paddingright:"30px"}}>Academics</Nav.Link>
            <Nav.Link href="#Dean" style = {{color:"white", paddingleft:"30px" ,paddingright:"30px"}}>Dean</Nav.Link>    
            <Nav.Link href="#People" style = {{color:"white", paddingleft:"30px" ,paddingright:"30px"}}>People</Nav.Link>
            <Nav.Link href="#Students" style = {{color:"white", paddingleft:"30px" ,paddingright:"30px"}}>Students</Nav.Link>
            <Nav.Link href="#Facilities" style = {{color:"white", paddingleft:"30px" ,paddingright:"30px"}}>Facilities</Nav.Link>
            <Nav.Link href="#Research" style = {{color:"white", paddingleft:"30px" ,paddingright:"30px"}}>Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
    </div>
  )
}

export default Newnavbar
