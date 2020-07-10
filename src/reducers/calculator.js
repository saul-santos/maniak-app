import { SET_CALCULATOR_DATA } from "../constants/ActionTypes";

const initialState = {
    calculator: {
        title: '',
        description: ''
    }
};

function calculator(state = initialState, action) {
    switch(action.type) {
        case SET_CALCULATOR_DATA:
            return { ...state, ...action.data };

        default:
            return state;
    }
};

export default calculator;