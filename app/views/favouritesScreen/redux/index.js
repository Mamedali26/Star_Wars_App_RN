import { constants } from "./actionTypes";

const initialState = {
    favourites: [],
    isFavourite: false,
}

export const reducerFavouritesScreen = (state = initialState, action) => {
    switch(action.type) {
        case constants.SET_ITEM_TO_FAVOURITES:
            return {
                ...state,
                favourites: [
                    ...state.favourites,
                    action.data
                ]
            }
        // case constants.SET_IS_FAVOURITE:
        //     return {
        //         ...state,
        //         isFavourite: action.data
        //     }
        case constants.SET_FAVOURITES_EMPTY:
            return {
                ...state,
                favourites: initialState.favourites
            }
    }
    return state;
}