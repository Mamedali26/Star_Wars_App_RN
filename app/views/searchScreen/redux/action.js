import { constants } from "./actionTypes";

export const setCategoriesInfo = data => ({
    type: constants.SET_CATEGORIES_INFO,
    data,
});