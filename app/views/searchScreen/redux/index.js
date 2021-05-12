import { constants } from "./actionTypes";

const initialState = {
    categoriesInfo: [],
    chosenCategoryName: '',
    chosenCategoryItems: {},
}

export const reducerForSearchCategories = (state = initialState, action) => {
    switch(action.type) {
        case constants.SET_CATEGORIES_INFO:
            return {
                ...state,
                categoriesInfo: action.data
            }
        case constants.SET_CHOSEN_CATEGORY_NAME:
            return {
                ...state,
                chosenCategoryName: action.data
            }
        case constants.SET_CHOSEN_CATEGORY_ITEMS:
            return {
                ...state,
                chosenCategoryItems: action.data
            }
    }
    return state;
}