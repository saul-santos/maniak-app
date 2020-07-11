import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ReviewCard } from "../ReviewCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Footer } from "../Footer";
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
                <Col xs={{ span: 8, offset: 4 }} sm={{ span: 5, offset: 7 }} md={{ span: 4, offset: 8 }} lg={{ span: 3, offset: 9 }}>
                    <div className="card-control">
                        <button onClick={() => setReviewIndex(reviewIndex - 1)} disabled={reviewIndex === 0} data-testid="previousReviewButton">
                            <FontAwesomeIcon icon={faChevronLeft}/>
                        </button>
                        <p>{`${reviewIndex + 1} / ${reviews.length}`}</p>
                        <button onClick={() => setReviewIndex(reviewIndex + 1)} disabled={reviewIndex === reviews.length - 1} data-testid="nextReviewButton">
                            <FontAwesomeIcon icon={faChevronRight}/>
                        </button>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ReviewCard {...reviews[reviewIndex] }/>
                </Col>
            </Row>
            <Footer/>
        </Container>
    );
}

Testimonials.propTypes = {
    actions: PropTypes.shape({
        fetchTestimonials: PropTypes.func
    }),
    testimonials: PropTypes.exact({
        slider: PropTypes.exact({
            title: PropTypes.string,
            reviews: PropTypes.array
        })
    })
};

export default Testimonials;
