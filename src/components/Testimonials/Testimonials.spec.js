import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Testimonials from './Testimonials';

describe('Testimonials component', () => {
    const fetchTestimonials = jest.fn();
    const props = {
        actions: { fetchTestimonials },
        testimonials: {
            slider: {
                title: 'Our customers love us',
                reviews: [
                    {
                        name: "Pete Zahut",
                        position: "Chief @ Maniak",
                        comment: "Testing is good"
                    },
                    {
                        name: "Bernabe",
                        position: "Tech Lead @ Maniak",
                        comment: "Lorem ipsum dolor sit amet"
                    }
                ]
            }
        }
    };

    it('should render testimonial title and reviews', () => {
        const { getByText } = render(<Testimonials {...props} />);
        const title = getByText(/Our customers love us/i);
        const reviewName = getByText(/Pete Zahut/i);
        
        expect(title).toBeInTheDocument();
        expect(reviewName).toBeInTheDocument();
    });

    it('should call fetchTestimonials', () => {
        render(<Testimonials {...props} />);
        expect(fetchTestimonials).toHaveBeenCalled();
    });

    it('should change to between reviews', async () => {
        const { getByTestId, getByText } = render(<Testimonials {...props} />);
        const leftClick = { button: 0 };

        // Buttons
        const nextReviewButton = getByTestId('nextReviewButton');
        const previousReviewButton = getByTestId('previousReviewButton');

        // Click nextReviewButton
        fireEvent.click(nextReviewButton, leftClick);
        expect(getByText(/Bernabe/i)).toBeInTheDocument();
        expect(nextReviewButton).toHaveAttribute('disabled');

        // Click previousReviewButton
        fireEvent.click(previousReviewButton, leftClick);
        expect(getByText(/Pete Zahut/i)).toBeInTheDocument();
        expect(previousReviewButton).toHaveAttribute('disabled');
    });
});
