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

export const setChosenCategoryItemsEmpty = () => ({
    type: constants.SET_CHOSEN_CATEGORY_ITEMS_EMPTY,
});

export const setNextPageUrls = data => ({
    type: constants.SET_NEXT_PAGE_URLS,
    data,
});

export const setNextPageUrlsEmpty = () => ({
    type: constants.SET_NEXT_PAGE_URLS_EMPTY,
});

export const setPageCount = data => ({
    type: constants.SET_PAGE_COUNT,
    data,
});
