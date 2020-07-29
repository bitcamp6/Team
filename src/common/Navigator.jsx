import React from 'react';
import {Nav, Navbar, Form, FormControl, Button} from 'react-bootstrap';
import {Link} from "react-router-dom";
export const Navigator = () => (
    <div>
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Form inline>
                <Link to="/"><Navbar.Brand>Home</Navbar.Brand></Link>
                <Link to="mypage"><Navbar.Brand>주문관리</Navbar.Brand></Link>
                <Link to ="/login"><Navbar.Brand>Login</Navbar.Brand></Link>
                <Link to="signup"><Navbar.Brand>회원가입</Navbar.Brand></Link>
            </Form>
        </Navbar>
    </div>
)
export default Navigator