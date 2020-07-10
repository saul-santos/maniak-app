import React from "react";
import { Link } from "react-router-dom";
import './styles.css';
import BelloteroLogo from "../../assets/bellotero.svg";

import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Navbar() {
    return (
        <Container fluid>
            <Row className="header">
                <Col>
                    <img src={BelloteroLogo} alt="Bellotero Icon"/>
                </Col>
                <Col>
                    <nav>
                        <ul className="navigation-bar">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/testimonials">Testimonials</Link>
                            </li>
                            <li>
                                <Link to="/calculator">Calculator</Link>
                            </li>
                        </ul>
                    </nav>
                </Col>
            </Row>
        </Container>
    );
}

export default Navbar;