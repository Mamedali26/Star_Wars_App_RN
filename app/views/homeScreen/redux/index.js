import { constants } from "./ationTypes";

const initialState = {
    randomNewsItems: [],
    chosenItem: {},
    chosenItemImage: '',
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
    }
    return state;
}