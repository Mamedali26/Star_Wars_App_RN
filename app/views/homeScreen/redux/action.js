import { constants } from "./ationTypes";

export const setRandomNewsItems = data => ({
    type: constants.SET_RANDOM_NEWS_ITEMS,
    data,
});