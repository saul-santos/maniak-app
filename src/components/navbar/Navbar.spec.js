import React from 'react';
import { render } from '@testing-library/react';
import Navbar from './Navbar';

jest.mock('react-router-dom', () => ({
    useLocation: () => ({
      pathname: '/'
    }),
    Link: ({ children, to }) => (
        <a href={to}>{children}</a>
    )
}));

describe('Navbar component', () => {
    it('should display testimonials and calculator links', () => {
        const { getByText } = render(<Navbar />);
        const testimonials = getByText(/Testimonials/i);
        const calculator = getByText(/Calculator/i);
        
        expect(testimonials).toBeInTheDocument();
        expect(calculator).toBeInTheDocument();
    });
});
