import testimonials from './testimonials';
import * as types from '../constants/ActionTypes';

describe('testimonials reducer', () => {
    it('should handle initial state', () => {
        expect(
            testimonials(undefined, {})
        ).toEqual({
            slider: {
                title: '',
                reviews: []
            }
        });
    });

    it('should handle SET_TESTIMONIALS', () => {
        const mockData = {
            slider: {
                title: 'Test',
                reviews: [{
                    name: 'Tester',
                    position: 'Tester',
                    comment: 'Testing is good'
                }]
            }
        };

        expect(
            testimonials({}, {
                type: types.SET_TESTIMONIALS,
                testimonials: mockData
            })
        ).toEqual(mockData);
    });
});
