import { constants } from "./ationTypes";

const initialState = {
    randomNewsItems: [],
}

export const reducerHomeScreen = (state = initialState, action) => {
    switch(action.type) {
        case constants.SET_RANDOM_NEWS_ITEMS:
            return {
                ...state,
                randomNewsItems: action.data
            }
    }
    return state;
}