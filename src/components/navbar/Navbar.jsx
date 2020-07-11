import React from "react";
import { Link, useLocation } from "react-router-dom";
import BelloteroLogo from "../../assets/bellotero.svg";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './styles.css';

function Navigationbar() {
    const { pathname } = useLocation();

    return (
        <Navbar collapseOnSelect expand="lg" bg="white">
            <Navbar.Brand href="/">
                <img src={BelloteroLogo} alt="Bellotero Icon" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav" className="navigation-bar">
                <Nav>
                    <div className={`navigation-item ${pathname === '/' ? 'active' : ''}`}>
                        <Link to="/">Home</Link>
                    </div>
                    <div className={`navigation-item ${pathname === '/testimonials' ? 'active' : ''}`}>
                        <Link to="/testimonials">Testimonials</Link>
                    </div>
                    <div className={`navigation-item ${pathname === '/calculator' ? 'active' : ''}`}>
                        <Link to="/calculator">Calculator</Link>
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigationbar;