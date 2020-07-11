import mySaga from './index';
import { takeEvery } from "redux-saga/effects";
import { FETCH_TESTIMONIALS, FETCH_CALCULATOR_DATA } from "../constants/ActionTypes";
import fetchTestimonials from "./testimonials";
import fetchCalculatorData from "./calculator";

describe('mySaga', () => {
    it('should handle testimonials and calculator data sagas', () => {
        const gen = mySaga();

        expect(gen.next().value).toEqual(takeEvery(FETCH_TESTIMONIALS, fetchTestimonials));
        expect(gen.next().value).toEqual(takeEvery(FETCH_CALCULATOR_DATA, fetchCalculatorData));
        expect(gen.next().done).toBeTruthy();
    });
});