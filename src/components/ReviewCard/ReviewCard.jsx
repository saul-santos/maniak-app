import React from "react";
import Card  from "react-bootstrap/Card";

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

export default ReviewCard;