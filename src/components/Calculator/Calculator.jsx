import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import './styles.css';

function Calculator({ actions, calculator }) {
    React.useEffect(() => {
        actions.fetchCalculatorData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Container>
            <Row>
                <Col xs={12} sm={12} md={6}>
                    <p className="ballotero-title">{calculator.title}</p>
                    <p className="ballotero-description">{calculator.description}</p>
                </Col>
                <Col xs={12} sm={12} md={6}>
                    <Row>
                        <Col>Monthly<br/>Ingredient Spending</Col>
                        <Col>
                            <p>30000</p>
                        </Col>
                    </Row>
                    <Row>
                        <Form>
                            <Form.Group controlId="formBasicRangeCustom">
                                <Form.Label>Range</Form.Label>
                                <Form.Control type="range" />
                            </Form.Group>
                        </Form>
                    </Row>
                    <Row>
                        <Col>Full-time employees that<br/>process invoices</Col>
                        <Col>
                            <p>10</p>
                        </Col>
                    </Row>
                    <Row>
                        <Form>
                            <Form.Group controlId="formBasicRangeCustom">
                                <Form.Label>Range</Form.Label>
                                <Form.Control type="range"/>
                            </Form.Group>
                        </Form>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Calculator;
