import React from "react";
import Card  from "react-bootstrap/Card";
import PropTypes from 'prop-types';

function ReviewCard({ name, position, comment }) {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <blockquote className="blockquote mb-0">
                <p>
                    {comment}
                </p>
                <footer className="blockquote-footer">
                    {position}
                </footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

ReviewCard.propTypes = {
    name: PropTypes.string,
    position: PropTypes.string,
    comment: PropTypes.string,
};

export default ReviewCard;