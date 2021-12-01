import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import styled from 'styled-components'

const Styles = styled.div`

    .navbar {
        height: 117px;
        background-color: #0A1744; 
    }

    .navbar, .navbar-brand, .navbar-nav, .nav-item, .nav.collapse, .nav-toggle, .nav-link {
        color: white;

    & a {
        color: white;
        }

        &:hover {
            color: white;
        }
    }

    .nav-link {
        width: 170px;
        height: 49px;
        font-size: 17px;
        background-color: red;
        color: white;
        border-radius: 25px;
        opacity: 1;
        text-transform: uppercase;
        vertical-align: middle;
        font-weight: 700;
        text-align: center;
    }

    #item-um {
        background-color: #72EFDB;
        color: #0B1741;
        box-shadow: 0px 3px 6px #5538EE29;
    }

    #item-dois {
        background-color: #1E3E7B;
        color: #FFF;

    }

    span {
        font-family: 'Rubik', sans-serif;
        color: #FFF;
        font-weight: 700;
}
`;

const NavigationBar = () => {

    return (
            <Styles>
                <Navbar
                expand="lg"
                className="justify-content-end">
                    <Navbar.Brand href="/home" className="mx-5">hashtag<span>finder</span></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end mx-5">
                    <Nav className="justify-content-end">
                        <Nav.Item><Nav.Link href="/sobre" id="item-um" className="mx-3">Sobre</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/login" id="item-dois" className="mx-3">Login</Nav.Link></Nav.Item>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Styles>

    )

}

export default NavigationBar