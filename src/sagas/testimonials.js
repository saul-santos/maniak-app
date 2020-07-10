import { call, put } from "redux-saga/effects";
import { setTestimonials } from "../actions";

async function _fetchTestimonials() {
    const response = await fetch('https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page1.json');
    return await response.json();
}

function* fetchTestimonials() {
    try {
        const testimonials = yield call(_fetchTestimonials);
        
        yield put(setTestimonials(testimonials));

    } catch (e) {
        console.error(e);
    }
}

export default fetchTestimonials;