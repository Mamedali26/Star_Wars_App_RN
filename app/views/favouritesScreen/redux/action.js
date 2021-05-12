import { constants } from "./actionTypes";

export const setItemToFavourites = data => ({
    type: constants.SET_ITEM_TO_FAVOURITES,
    data,
});