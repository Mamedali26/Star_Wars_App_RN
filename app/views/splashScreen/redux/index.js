import { constants } from "./actionTypes";

const initialState = {
    isSplash: false,
}

export const reducerForSplashScreen = (state = initialState, action) => {
    switch(action.type) {
        case constants.SET_IS_SPLASH:
            return {
                ...state,
                isSplash: action.data
            }
    }
    return state;
}