import calculator from './calculator';
import * as types from '../constants/ActionTypes';

describe('calculator reducer', () => {
    it('should handle initial state', () => {
        expect(
            calculator(undefined, {})
        ).toEqual({
            title: '',
            description: '',
            estimatedFoodCostSaving: '0',
            estimatedAnnualSavings: '0',
        });
    });

    it('should handle SET_CALCULATOR_DATA', () => {
        const data = {
            title: 'Test',
            description: 'Test data'
        };

        expect(
            calculator({}, {
                type: types.SET_CALCULATOR_DATA,
                data
            })
        ).toEqual(data);
    });

    it('should handle CALCULATE_ESTIMATED_COSTS', () => {
        const values = {
            ingredientSpending: 70,
            employeesNumber: 3
        };

        expect(
            calculator({}, {
                type: types.CALCULATE_ESTIMATED_COSTS,
                values
            })
        ).toEqual({
            estimatedFoodCostSaving: '21.00',
            estimatedAnnualSavings: '4032.00',
        });
    });
});
