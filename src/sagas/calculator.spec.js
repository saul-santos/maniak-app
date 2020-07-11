import fetchCalculatorData, { _fetchCalculatorData } from './calculator';
import { setCalculatorData } from "../actions";
import { call, put } from "redux-saga/effects";

describe('fetchCalculatorData saga', () => {
    it('should execute an API call to fetch calculator data', () => {
        const mockData = {
            title: "Save more with Bellotero.io",
            description: "With Bellotero.io you save time and money.."
        };

        const gen = fetchCalculatorData();

        expect(gen.next().value).toEqual(call(_fetchCalculatorData));
        expect(gen.next(mockData).value).toEqual(put(setCalculatorData(mockData.calculator)));
        expect(gen.next().done).toBeTruthy();
    });
});