import { constants } from "./actionTypes";

export const setCategoriesScreenSaga = () => ({
    type: constants.SET_CATEGORIES_SCREEN_SAGA,
});

export const setChosenCategoryItemsSaga = () => ({
    type: constants.SET_CHOSEN_CATEGORY_ITEMS_SAGA,
});

export const setSearchItemsSaga = () => ({
    type: constants.SET_SEARCH_ITEMS_SAGA,
});