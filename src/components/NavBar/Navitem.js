import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import {Nav} from 'react-bootstrap'
import './Navbar.css'

function Navitem() {
  return (
    <div>
     <Navbar collapseOnSelect expand="lg" className="align-items-center fixed-top navbar">
          <div className="container-fluid">
          <Navbar.Brand><h3 className="heading"><span className="span">food</span>hub</h3></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{background:"white"}}/>
          <Navbar.Collapse id="responsive-navbar-nav ">
            <Nav className="me-auto mx-auto text-center">
              <Nav.Link> <span className="list">Home</span></Nav.Link>
              <Nav.Link> <span className="list">About</span></Nav.Link>
              <Nav.Link> <span className="list">Special Dish</span></Nav.Link>
              <Nav.Link> <span className="list">Dish</span></Nav.Link>
              <Nav.Link> <span className="list">Contact</span></Nav.Link>
            </Nav>
            <Nav className="checkout text-center">
            <Nav.Link> <span className="list">My Dishes</span></Nav.Link>
              <Nav.Link><button className="signIn">Hi, ADARSH</button></Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </div>
      </Navbar>
    </div>
  );
}

export default Navitem;
