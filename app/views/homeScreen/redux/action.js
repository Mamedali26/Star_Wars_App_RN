import { constants } from "./ationTypes";

export const setRandomNewsItems = data => ({
    type: constants.SET_RANDOM_NEWS_ITEMS,
    data,
});

export const setRandomNewsChosenItem = data => ({
    type: constants.SET_RANDOM_NEWS_CHOSEN_ITEM,
    data,
});

export const setRandomNewsChosenImage = data => ({
    type: constants.SET_RANDOM_NEWS_CHOSEN_IMAGE,
    data,
});

export const setIsLoading = data => ({
    type: constants.SET_IS_LOADING,
    data,
});