import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import inst_logo from '../../Assets/inst_logo.jpg'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineSearch } from 'react-icons/ai'
import Hero from '../HeroSection/hero'
import "./newnavbar.css"
import img1 from "../../Assets/banner.png"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Offcanvas from 'react-bootstrap/Offcanvas';
const Newnavbar = () => {
  return (
    <div className='outerdiv'>
      <img src={img1} className='image'></img>
      <div>
        <Navbar key="lg" expand="lg" className="mb-3">
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link href="home" className='staticbutton'>Home</Nav.Link>
                  {/* first dropdown */}
                  <NavDropdown
                    title="Administration"  
                    id={`offcanvasNavbarDropdown-expand-lg` }       
                  >
                    <NavDropdown.Item href="boardofgoverners">Board Of Governers</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action4">
                      Finance Committee
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      General Admnistration
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action6">
                      Other Administration
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action7">
                      Senate
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action8">
                      Building Works Committee
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action9">
                      Administrative Structure
                    </NavDropdown.Item>
                  </NavDropdown>
                  {/* Second dropdown */}
                  <NavDropdown
                    title="Departments"
                    id={`offcanvasNavbarDropdown-expand-lg`}
                  >
                    <NavDropdown.Item href="http://cse.iiitdmj.ac.in/">Computer Science & Engineering (CSE)</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="https://www.iiitdmj.ac.in/ece.iiitdmj.ac.in/">
                      Electronics & Communication Engineering (ECE)
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="https://www.iiitdmj.ac.in/design.iiitdmj.ac.in/">
                      Design (Des)
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="https://www.iiitdmj.ac.in/me.iiitdmj.ac.in/">
                      Mechanical Engineering (ME)
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="https://www.iiitdmj.ac.in/ns.iiitdmj.ac.in/">
                      Natural Sciences (NS)
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="https://www.iiitdmj.ac.in/la.iiitdmj.ac.in/">
                      Liberal Arts (LA)
                    </NavDropdown.Item>
                  </NavDropdown>


                  {/* Third dropdown */}
                  <NavDropdown
                    title="Academics"
                    id={`offcanvasNavbarDropdown-expand-lg`}
                  >
                    <NavDropdown
                      title="Programmes"
                      id={`offcanvasNavbarDropdown-expand-lg-hehe`} className='navbardrop'
                    >
                      <NavDropdown.Item href="#action3">B.Tech</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action4">
                        M.Tech
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        B.Des
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action6">
                        M.Des
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action7">
                        Ph.D
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action8">
                        Integrated Master + Ph.D
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action8">
                        Special Part time M.Tech/M.Des
                      </NavDropdown.Item>

                    </NavDropdown>

                    <NavDropdown
                      title="Admission"
                      id={`offcanvasNavbarDropdown-expand-lg-hehe`}
                    >
                      <NavDropdown.Item href="#action3">Admission</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action4">
                        Undergraduate
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Post Graduate
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action6">
                        Fee Structure
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action7">
                        Seat Matrix 2022-23
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action8">
                        Academic Guidelines (UG & PG)
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action8">
                        Acadeic Guidelines (Ph.D.)
                        Batch 2020 Onwards
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action8">
                        Curriculum
                      </NavDropdown.Item>
                    </NavDropdown>






                    {/* Important Links */}
                    <NavDropdown
                      title="Important Links"
                      id={`offcanvasNavbarDropdown-expand-lg-hehe`}
                    >
                      <NavDropdown.Item href="https://www.iiitdmj.ac.in/academics/calendar.php">Academic Calender</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action4">
                        Usefull Information
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Revised Refund Rule
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action6">
                        Propasal/Modification for a Course
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action7">
                        Proposal for a new elective course & modification in a course
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action8">
                        Form for submission of thesis
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action8">
                        Convocation
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action8">
                        Registration
                      </NavDropdown.Item>
                    </NavDropdown>

                    {/* Important Forms */}
                    <NavDropdown
                      title="Important Forms"
                      id={`offcanvasNavbarDropdown-expand-lg-hehe`}
                    >
          
                      <NavDropdown.Item href="#action4">
                        Important Forms
                      </NavDropdown.Item>
                    </NavDropdown>

                    {/* Circulars */}
                    <NavDropdown
                      title="Circulars"
                      id={`offcanvasNavbarDropdown-expand-lg-hehe`}
                    >
                      <NavDropdown.Item href="#action4">
                        Internal Circulars
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        External Circulars
                      </NavDropdown.Item>
                    </NavDropdown>
                  </NavDropdown>
                  {/* Deans dropdown */}
                  <NavDropdown
                    title="Deans"
                    id={`offcanvasNavbarDropdown-expand-lg`}
                  >
                    <NavDropdown.Item href="#action3">Dean Academics</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action4">
                    Dean Students
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Dean RSPC
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action6">
                      Dean P&D
                    </NavDropdown.Item>
                  </NavDropdown>
                  

                  {/* People dropdown */}
                  <NavDropdown
                    title="People"
                    id={`offcanvasNavbarDropdown-expand-lg`}
                  >
                    <NavDropdown.Item href="http://faculty.iiitdmj.ac.in/">Faculty</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#actin4">
                    Research staff
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Office Administration
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action6">
                      Staff
                    </NavDropdown.Item>
                  </NavDropdown>



                  {/* Students */}
                  <NavDropdown
                    title="Students"
                    id={`offcanvasNavbarDropdown-expand-lg`}
                  >
                    <NavDropdown.Item href="#action3">Placements</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action4">
                      Gymkhana
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Activities
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action6">
                      Councelling
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action7">
                      Hostels
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action8">
                      Alumini Cell
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action9">
                      Student Mess
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action9">
                      Primary Health Center
                    </NavDropdown.Item>
                    
                  </NavDropdown>



                  {/* Facilites dropdown */}
                  <NavDropdown
                    title="Facilities"
                    id={`offcanvasNavbarDropdown-expand-lg`}
                  >
                    <NavDropdown.Item href="#action3">Computer Center</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#actin4">
                    Library
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Bank & ATM
                    </NavDropdown.Item>s
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action6">
                      Downloads
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#action1">Research</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>
    </div>
  )
}

export default Newnavbar
