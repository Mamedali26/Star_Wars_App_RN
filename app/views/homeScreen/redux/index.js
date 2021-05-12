import { constants } from "./ationTypes";

const initialState = {
    randomNewsItems: [],
    chosenItem: {},
    chosenItemImage: '',
    isLoading: false,
}

export const reducerHomeScreen = (state = initialState, action) => {
    switch(action.type) {
        case constants.SET_RANDOM_NEWS_ITEMS:
            return {
                ...state,
                randomNewsItems: action.data
            }
        case constants.SET_RANDOM_NEWS_CHOSEN_ITEM:
            return {
                ...state,
                chosenItem: action.data
            }
        case constants.SET_RANDOM_NEWS_CHOSEN_IMAGE:
            return {
                ...state,
                chosenItemImage: action.data
            }
        case constants.SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.data
            }
    }
    return state;
}