import { SET_CALCULATOR_DATA } from "../constants/ActionTypes";

const initialState = {
    title: '',
    description: ''
};

function calculator(state = initialState, action) {
    switch(action.type) {
        case SET_CALCULATOR_DATA:
            return { ...action.data };

        default:
            return state;
    }
};

export default calculator;