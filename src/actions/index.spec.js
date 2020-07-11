import * as types from '../constants/ActionTypes';
import * as actions from './index';

describe('testimonials actions', () => {
    it('fetchTestimonials should create FETCH_TESTIMONIALS action', () => {
        expect(actions.fetchTestimonials()).toEqual({
            type: types.FETCH_TESTIMONIALS
        });
    });

    it('setTestimonials should create SET_TESTIMONIALS action', () => {
        expect(actions.setTestimonials('Test')).toEqual({
            type: types.SET_TESTIMONIALS,
            testimonials: 'Test'
        });
    });
});

describe('calculator actions', () => {
    it('fetchCalculatorData should create FETCH_CALCULATOR_DATA action', () => {
        expect(actions.fetchCalculatorData()).toEqual({
            type: types.FETCH_CALCULATOR_DATA
        });
    });

    it('setCalculatorData should create SET_CALCULATOR_DATA action', () => {
        expect(actions.setCalculatorData('Test')).toEqual({
            type: types.SET_CALCULATOR_DATA,
            data: 'Test'
        });
    });

    it('calculateEstimatedCosts should create CALCULATE_ESTIMATED_COSTS action', () => {
        expect(actions.calculateEstimatedCosts('Test')).toEqual({
            type: types.CALCULATE_ESTIMATED_COSTS,
            values: 'Test'
        });
    });
});
