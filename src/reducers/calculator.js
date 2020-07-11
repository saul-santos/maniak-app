import { SET_CALCULATOR_DATA, CALCULATE_ESTIMATED_COSTS } from "../constants/ActionTypes";

const initialState = {
    title: '',
    description: '',
    estimatedFoodCostSaving: '0',
    estimatedAnnualSavings: '0',
};

function calculator(state = initialState, action) {
    console.log(action);

    switch(action.type) {
        case SET_CALCULATOR_DATA:
            return { ...state, ...action.data };

        case CALCULATE_ESTIMATED_COSTS:
            const { ingredientSpending, employeesNumber } = action.values;
            const estimations = {
                estimatedFoodCostSaving: (ingredientSpending * 0.3).toFixed(2),
                estimatedAnnualSavings: (employeesNumber * 1337 + ingredientSpending * 0.3).toFixed(2)
            };

            return { ...state, ...estimations };

        default:
            return state;
    }
};

export default calculator;