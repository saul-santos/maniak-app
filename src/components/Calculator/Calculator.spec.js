import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from './Calculator';

describe('Calculator component', () => {
    const fetchCalculatorData = jest.fn();
    const props = {
        actions: { fetchCalculatorData },
        calculator: {
            title: 'Title test',
            description: 'Description test'
        }
    };

    it('should render calculator title and description', () => {
        const { getByText } = render(<Calculator {...props} />);
        const title = getByText(/Title test/i);
        const description = getByText(/Description test/i);
        
        expect(title).toBeInTheDocument();
        expect(description).toBeInTheDocument();
    });

    it('should call fetchCalculatorData', () => {
        render(<Calculator {...props} />);
        expect(fetchCalculatorData).toHaveBeenCalled();
    });

    it('should change the ingredients cost', () => {
        const { getByTestId, getByText } = render(<Calculator {...props} />);
        const ingredientsRange = getByTestId('ingredients-range');
        
        fireEvent.change(ingredientsRange, { target: { value: 75 } });
        expect(getByText('75')).toBeInTheDocument();
    });

    it('should change the employees number', () => {
        const { getByTestId, getByText } = render(<Calculator {...props} />);
        const employeesNumber = getByTestId('employees-range');
        
        fireEvent.change(employeesNumber, { target: { value: 9 } });
        expect(getByText('9')).toBeInTheDocument();
    });
});
