import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { ArrowRight } from 'react-feather';


function Header() {
  return (
    <div>
        <Navbar className="nav" style={{backgroundColor:'rgb(196, 196, 16)'}}>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrfUSueuNHZvk_ZezO--8lcgAmn7fZoNZHxHUlzk_JE1qWkdSrdK0aWPDMWjS84bjQUSg&usqp=CAU"
              width="30"
              height="30"
              className="d-inline-block align-top"
              style={{borderRadius:'50%'}}
            />{' '}
            
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link  style={{color:'white',fontWeight:'bolder'}} >Home</Nav.Link>
            <Nav.Link style={{color:'white',fontWeight:'bolder'}}>Features</Nav.Link>
            <Nav.Link style={{color:'white',fontWeight:'bolder'}}>Plans</Nav.Link>
            <Nav.Link style={{color:'white',fontWeight:'bolder'}}>About</Nav.Link>
            <Nav.Link style={{color:'white',fontWeight:'bolder'}}>RegisterNow!</Nav.Link>
          </Nav>
        
      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button variant='contained' ><ArrowRight  color='white'/></Button>
            
          </Col>
          
        </Row>
      </Form>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header