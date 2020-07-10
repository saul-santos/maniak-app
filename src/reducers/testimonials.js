import { SET_TESTIMONIALS } from "../constants/ActionTypes";

const initialState = {
    slider: {
        title: '',
        reviews: []
    }
};

function testimonials(state = initialState, action) {
    switch(action.type) {
        case SET_TESTIMONIALS:
            return { ...action.testimonials };

        default:
            return state;
    }
};

export default testimonials;