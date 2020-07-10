import { combineReducers } from "redux";
import calculator from "./calculator";
import testimonials from "./testimonials";

const rootReducer = combineReducers({
    calculator,
    testimonials
});

export default rootReducer;