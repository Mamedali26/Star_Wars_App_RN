import { constants } from "./actionTypes";

const initialState = {
    categoriesInfo: [],
}

export const reducerForSearchCategories = (state = initialState, action) => {
    switch(action.type) {
        case constants.SET_CATEGORIES_INFO:
            return {
                ...state,
                categoriesInfo: action.data
            }
    }
    return state;
}