import React, { Component } from 'react';
import ReactBootstrap, {Jumbotron, Navbar , Nav , Button, Col, Grid, Panel, FormGroup} from 'react-bootstrap'
import Scrollspy from "react-scrollspy";
import './navbar.scss';
const navbar = (props) => {

    return (
      <div>
         { props.navbarType === 'nonSticky' ? <div  className='ideo-navbar'>
               <Navbar  fixed="top" collapseOnSelect expand="lg">
        <Navbar.Brand>
       <div>
        <img src={ require('../assets/images/logo.png') } ></img>
       </div> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Scrollspy
              className="navbar-nav"
              items={["about-us", "services" , "projects" , "careers" , "blogs" , "contact-us"]}
              currentClassName="is-current">
              <li  className="nav-item">
                <a className="nav-link"  href="/#about-us">
                  about us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#services">
                  services
                </a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link"   href="/#careers">
                  careers
                </a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link"   href="/#contact-us">
                  contact us
                </a>
              </li>
            </Scrollspy>
           
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div> : 
    <div  className='ideo-navbar sticky' >
    <Navbar   collapseOnSelect expand="lg">
<Navbar.Brand>
<div>
<img src={ require('../assets/images/logo.png') } ></img>
</div> 
</Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
<Nav className="mr-auto">
 <Scrollspy
   className="navbar-nav"
   items={["about-us", "services" , "projects" , "careers" , "blogs" , "contact-us"]}
   currentClassName="is-current">
   <li  className="nav-item">
     <a className="nav-link"  href="/#about-us">
       about us
     </a>
   </li>
   <li className="nav-item">
     <a className="nav-link" href="/#services">
       services
     </a>
   </li>
   <li className="nav-item">
     <a className="nav-link"   href="/#projects">
       projects
     </a>
   </li>
   <li className="nav-item">
     <a className="nav-link"   href="/#careers">
       careers
     </a>
   </li>
   <li className="nav-item">
     <a className="nav-link"   href="/#blogs">
       news/blogs
     </a>
   </li>
   <li className="nav-item">
     <a className="nav-link"   href="/#contact-us">
       contact us
     </a>
   </li>
 </Scrollspy>

</Nav>
</Navbar.Collapse>
</Navbar>
</div> }
      </div>
       
    )
}

export default navbar;