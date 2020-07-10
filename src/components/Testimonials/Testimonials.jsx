import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { ReviewCard } from "../ReviewCard";
import './styles.css';

function Testimonials({ actions, testimonials }) {
    const { slider: { title, reviews }} = testimonials;
    const [reviewIndex, setReviewIndex] = React.useState(0);

    React.useEffect(() => {
        actions.fetchTestimonials();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Container>
            <Row>
                <Col>
                    <p className="testimonials-title">{title}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ReviewCard {...reviews[reviewIndex] }/>
                </Col>
            </Row>
            <Row>
            <ButtonGroup>
                <Button variant="primary">{`${reviewIndex + 1} /${reviews.length}`}</Button>
                <Button variant="primary" onClick={() => setReviewIndex(reviewIndex - 1)} disabled={reviewIndex === 0}>
                    {'<'}
                </Button>
                <Button variant="primary" onClick={() => setReviewIndex(reviewIndex + 1)} disabled={reviewIndex === reviews.length - 1}>
                    {'>'}
                </Button>
            </ButtonGroup>
            </Row>
        </Container>
    );
}

export { Testimonials };
