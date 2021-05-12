import { constants } from "./actionTypes";

export const setCategoriesInfo = data => ({
    type: constants.SET_CATEGORIES_INFO,
    data,
});

export const setChosenCategoryName = data => ({
    type: constants.SET_CHOSEN_CATEGORY_NAME,
    data,
});

export const setChosenCategoryItems = data => ({
    type: constants.SET_CHOSEN_CATEGORY_ITEMS,
    data,
});