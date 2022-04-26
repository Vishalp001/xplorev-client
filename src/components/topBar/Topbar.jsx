import React from 'react'
import { NavDropdown, Nav, Navbar, Container } from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import './topbar.scss'
import { FaSearch } from 'react-icons/fa'
import Logo from '../../assets/images/logo.png'
import darkLogo from '../../assets/images/darkLogo.png'
import newLogo from '../../assets/images/carlogo.png'

import { HiLocationMarker } from 'react-icons/hi'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Topbar = () => {
  return (
    <>
      <div className='navbarWrapper'>
        <div className='topBar'>
          <div className='colOne'>
            <div className='location'>
              <HiLocationMarker className='icon' /> 99 Roving St., Big City
            </div>
            <div className='contact'>
              <BsFillTelephoneFill className='icon' /> 123-456-789
            </div>
          </div>
          <div className='colTwo'>Mon-Fri | 08:00 - 17:00</div>
        </div>
        <Navbar collapseOnSelect expand='lg' className='navBar'>
          <Container className='navBarContainer'>
            <Navbar.Brand className='firstDiv'>
              <Link className='link' to='/'>
                <div className='logo'>
                  <img src={newLogo} alt='XplorEV' />
                </div>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse className='midDiv' id='responsive-navbar-nav'>
              <Nav>
                <Nav.Link href='#quickBites'>Quick Bites</Nav.Link>
                <NavDropdown title='Electric Vehicles' id='basic-nav-dropdown'>
                  <NavDropdown.Item href='#electriccars'>
                    Electric Cars
                  </NavDropdown.Item>
                  <NavDropdown.Item href='#electricbikes'>
                    Electric Bikes
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title='News' id='basic-nav-dropdown'>
                  <NavDropdown.Item href='#latestnews'>
                    Latest News
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='trendingnews'>
                    Trending News
                  </NavDropdown.Item>
                  <NavDropdown.Item href='#videos' >
                    Videos
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title='Knowledge Hub' id='basic-nav-dropdown'>
                  <NavDropdown.Item href='#freecourses'>
                    Free Courses
                  </NavDropdown.Item>
                  <NavDropdown.Item href='#knowev'>Know EV</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/gov_ev_policies'>
                    Government EV Policies
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            <NavbarCollapse className='searchBar lastDiv'>
              <Nav>
                <Nav.Link as={Link} to='/charging_stations'>
                  <div className='searchDiv'>
                    <FaSearch className='searchIcon' />
                    <span> Find Charging Stations</span>
                  </div>
                </Nav.Link>
              </Nav>
            </NavbarCollapse>
          </Container>
        </Navbar>
      </div>
    </>
  )
}

export default Topbar
