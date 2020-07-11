import React from 'react';
import { render } from '@testing-library/react';
import ReviewCard from './ReviewCard';

describe('ReviewCard component', () => {
    const props = {
        name: "Pete Zahut",
        position: "Chief @ Maniak",
        comment: "Testing is good"
    };

    it('should display name, position and comment', () => {
        const { getByText } = render(<ReviewCard {...props} />);
        const name = getByText(/Pete Zahut/i);
        const position = getByText(/Chief @ Maniak/i);
        const comment = getByText(/Testing is good/i);
        
        expect(name).toBeInTheDocument();
        expect(position).toBeInTheDocument();
        expect(comment).toBeInTheDocument();
    });
});
