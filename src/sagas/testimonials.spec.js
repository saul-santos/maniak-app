import fetchTestimonials, { _fetchTestimonials } from './testimonials';
import { setTestimonials } from "../actions";
import { call, put } from "redux-saga/effects";

describe('fetchTestimonials saga', () => {
    it('should execute an API call to fetch testimonials data', () => {
        const mockData = {
            slider: {
              title:  "Our customers love us",
              reviews: [{
                name: "Pete Zahut",
                position: "Chief @ Maniak",
                comment: "Testing is good"
              }]
            }
        };

        const gen = fetchTestimonials();

        expect(gen.next().value).toEqual(call(_fetchTestimonials));
        expect(gen.next(mockData).value).toEqual(put(setTestimonials(mockData)));
        expect(gen.next().done).toBeTruthy();
    });
});