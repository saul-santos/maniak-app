import * as types from "../constants/ActionTypes";

// Testimonials actions
export const fetchTestimonials = () => ({ type: types.FETCH_TESTIMONIALS });
export const setTestimonials = testimonials => ({ type: types.SET_TESTIMONIALS, testimonials });

// Calculator actions
export const fetchCalculatorData = () => ({ type: types.FETCH_CALCULATOR_DATA });
export const setCalculatorData = data => ({ type: types.SET_CALCULATOR_DATA, data });
export const calculateEstimatedCosts = values => ({ type: types.CALCULATE_ESTIMATED_COSTS, values });
