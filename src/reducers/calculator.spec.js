import calculator from './calculator';
import * as types from '../constants/ActionTypes';

describe('calculator reducer', () => {
    it('should handle initial state', () => {
        expect(
            calculator(undefined, {})
        ).toEqual({
            title: '',
            description: ''
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
});
