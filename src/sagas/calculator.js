import { call, put } from "redux-saga/effects";
import { setCalculatorData } from "../actions";

async function _fetchCalculatorData() {
    const response = await fetch('https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page2.json');
    return await response.json();
}

function* fetchCalculatorData() {
    try {
        const data = yield call(_fetchCalculatorData);
        
        yield put(setCalculatorData(data));

    } catch (e) {
        console.error(e);
    }
}

export default fetchCalculatorData;