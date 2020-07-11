import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Footer } from "../Footer";
import './styles.css';

function Calculator({ actions, calculator }) {
    const { title, description, estimatedFoodCostSaving, estimatedAnnualSavings } = calculator;
    const { fetchCalculatorData, calculateEstimatedCosts } = actions;

    const [ingredientSpending, setIngredientsSpending] = React.useState(50);
    const [employeesNumber, setEmployeesNumber] = React.useState(5);

    React.useEffect(() => {
        fetchCalculatorData();
        calculateEstimatedCosts({ ingredientSpending, employeesNumber });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function handleIngredientSpendingChange(event) {
        const value = parseInt(event.target.value);
        setIngredientsSpending(value);
        calculateEstimatedCosts({ ingredientSpending: value, employeesNumber });
    }

    function handleEmployeesNumberChange(event) {
        const value = parseInt(event.target.value);
        setEmployeesNumber(value);
        calculateEstimatedCosts({ ingredientSpending, employeesNumber: value });
    }

    return (
        <Container>
            <Row>
                <Col xs={12} sm={12} md={12} lg={6}>
                    <p className="ballotero-title">{title}</p>
                    <p className="ballotero-description">{description}</p>
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
                            <Form.Control
                                type="range"
                                min={10}
                                max={100}
                                value={ingredientSpending}
                                onChange={handleIngredientSpendingChange}
                                data-testid="ingredients-range"
                            />
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
                            <Form.Control
                                type="range"
                                min={1}
                                max={10}
                                value={employeesNumber}
                                onChange={handleEmployeesNumberChange}
                                data-testid="employees-range"
                            />
                        </Col>
                    </Row>
                    <Row className="results-section">
                        <Col xs={12} sm={12} md={6}>
                            <p className="result-value" data-testid="result-food-cost-saving">
                                ${estimatedFoodCostSaving}
                            </p>
                            <p className="result-text">Estimated Food Cost Saving</p>
                        </Col>
                        <Col xs={12} sm={12} md={6}>
                            <p className="result-value" data-testid="result-annual-savings">
                                ${estimatedAnnualSavings}
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

Calculator.propTypes = {
    actions: PropTypes.shape({
        fetchCalculatorData: PropTypes.func,
        calculateEstimatedCosts: PropTypes.func
    }),
    calculator: PropTypes.exact({
        title: PropTypes.string,
        description: PropTypes.string,
        estimatedFoodCostSaving: PropTypes.string,
        estimatedAnnualSavings: PropTypes.string,
    })
};

export default Calculator;
