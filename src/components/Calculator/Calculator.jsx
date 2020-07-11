import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Footer } from "../Footer";
import './styles.css';

function Calculator({ actions, calculator }) {
    const [ingredientSpending, setIngredientsSpending] = React.useState(50);
    const [employeesNumber, setEmployeesNumber] = React.useState(5);

    React.useEffect(() => {
        actions.fetchCalculatorData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function handleIngredientSpendingChange(event) {
        setIngredientsSpending(event.target.value);
    }

    function handleEmployeesNumberChange(event) {
        setEmployeesNumber(event.target.value);
    }

    return (
        <Container>
            <Row>
                <Col xs={12} sm={12} md={12} lg={6}>
                    <p className="ballotero-title">{calculator.title}</p>
                    <p className="ballotero-description">{calculator.description}</p>
                </Col>
                <Col xs={12} sm={12} md={12} lg={6}>
                    <Row className="ingredients-section">
                        <Col className="slider-text">
                            <p>Monthly<br/>Ingredient Spending</p>
                        </Col>
                        <Col className="slider-value">
                            <p><span>$</span>{ingredientSpending}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control type="range" min={10} max={100} value={ingredientSpending} onChange={handleIngredientSpendingChange}/>
                        </Col>
                    </Row>
                    <Row className="employees-section">
                        <Col className="slider-text">
                            <p>Full-time employees that<br/>process invoices</p>
                        </Col>
                        <Col className="slider-value">
                            <p>{employeesNumber}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control type="range" min={1} max={10} value={employeesNumber} onChange={handleEmployeesNumberChange}/>
                        </Col>
                    </Row>
                    <Row className="results-section">
                        <Col xs={12} sm={12} md={6}>
                            <p className="result-value">
                                ${(ingredientSpending * 0.3).toFixed(2)}
                            </p>
                            <p className="result-text">Estimated Food Cost Saving</p>
                        </Col>
                        <Col xs={12} sm={12} md={6}>
                            <p className="result-value">
                                ${(employeesNumber * 1337 + ingredientSpending * 0.3).toFixed(2)}
                            </p>
                            <p className="result-text">Your Estimated Annual Savings</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Footer/>
        </Container>
    );
}

export default Calculator;
