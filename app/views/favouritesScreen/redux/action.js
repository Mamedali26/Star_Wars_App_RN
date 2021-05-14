import { constants } from "./actionTypes";

export const setItemToFavourites = data => ({
    type: constants.SET_ITEM_TO_FAVOURITES,
    data,
});

export const setFavouritesEmpty = () => ({
    type: constants.SET_FAVOURITES_EMPTY,
});

export const setItemRemoveFromFavourites = data => ({
    type: constants.SET_ITEM_REMOVE_FROM_FAVOURITES,
    data,
});
