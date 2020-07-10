import * as types from "../constants/ActionTypes";

export const fetchTestimonials = () => ({ type: types.FETCH_TESTIMONIALS });
export const setTestimonials = testimonials => ({ type: types.SET_TESTIMONIALS, testimonials });

export const fetchCalculatorData = () => ({ type: types.FETCH_CALCULATOR_DATA });
export const setCalculatorData = data => ({ type: types.SET_CALCULATOR_DATA, data });
