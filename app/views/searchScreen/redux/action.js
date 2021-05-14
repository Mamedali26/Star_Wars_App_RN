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

export const setIsSearch = data => ({
    type: constants.SET_IS_SEARCH,
    data,
});

export const setSearchText = data => ({
    type: constants.SET_SEARCH_TEXT,
    data,
});

export const setSearchResults = data => ({
    type: constants.SET_SEARCH_RESULTS,
    data,
});