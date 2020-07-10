import { takeEvery } from "redux-saga/effects";
import { FETCH_TESTIMONIALS, FETCH_CALCULATOR_DATA } from "../constants/ActionTypes";
import fetchTestimonials from "./testimonials";
import fetchCalculatorData from "./calculator";

function* mySaga() {
    yield takeEvery(FETCH_TESTIMONIALS, fetchTestimonials);
    yield takeEvery(FETCH_CALCULATOR_DATA, fetchCalculatorData);
}

export default mySaga;