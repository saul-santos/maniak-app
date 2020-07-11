import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from './Calculator';

describe('Calculator component', () => {
    const fetchCalculatorData = jest.fn();
    const calculateEstimatedCosts = jest.fn();
    const props = {
        actions: {
            fetchCalculatorData,
            calculateEstimatedCosts,
        },
        calculator: {
            title: 'Title test',
            description: 'Description test',
            estimatedFoodCostSaving: '0',
            estimatedAnnualSavings: '0',
        }
    };

    it('should render calculator title and description', () => {
        const { getByText } = render(<Calculator {...props} />);
        const title = getByText(/Title test/i);
        const description = getByText(/Description test/i);
        
        expect(title).toBeInTheDocument();
        expect(description).toBeInTheDocument();
    });

    it('should call fetchCalculatorData and calculateEstimatedCosts', () => {
        render(<Calculator {...props} />);
        expect(fetchCalculatorData).toHaveBeenCalled();
        expect(calculateEstimatedCosts).toHaveBeenCalled();
    });

    it('should change the ingredients cost and calculateEstimatedCosts', () => {
        const { getByTestId, getByText } = render(<Calculator {...props} />);
        const ingredientsRange = getByTestId('ingredients-range');
        
        fireEvent.change(ingredientsRange, { target: { value: 75 } });
        expect(getByText('75')).toBeInTheDocument();
        expect(calculateEstimatedCosts).toHaveBeenCalled();
    });
 
    it('should change the employees number and calculateEstimatedCosts', () => {
        const { getByTestId, getByText } = render(<Calculator {...props} />);
        const employeesNumber = getByTestId('employees-range');
        
        fireEvent.change(employeesNumber, { target: { value: 9 } });
        expect(getByText('9')).toBeInTheDocument();
        expect(calculateEstimatedCosts).toHaveBeenCalled();
    });
});
