import { constants } from "./actionTypes";

const initialState = {
    categoriesInfo: [],
    chosenCategoryName: '',
    chosenCategoryItems: [],
    nextPageUrls: [],
    isSearch: false,
    searchText: '',
    searchResults: [],
    pageCount: 0,
}

export const reducerForSearchCategories = (state = initialState, action) => {
    switch(action.type) {
        case constants.SET_CATEGORIES_INFO:
            return {
                ...state,
                categoriesInfo: action.data
            }
        case constants.SET_CHOSEN_CATEGORY_NAME:
            return {
                ...state,
                chosenCategoryName: action.data
            }
        case constants.SET_CHOSEN_CATEGORY_ITEMS:
            return {
                ...state,
                chosenCategoryItems: [...state.chosenCategoryItems, ...action.data]
            }
        case constants.SET_CHOSEN_CATEGORY_ITEMS_EMPTY:
            return {
                ...state,
                chosenCategoryItems: initialState.chosenCategoryItems
            }
        case constants.SET_NEXT_PAGE_URLS:
            return {
                ...state,
                nextPageUrls: [...state.nextPageUrls, action.data]
            }
        case constants.SET_NEXT_PAGE_URLS_EMPTY:
            return {
                ...state,
                nextPageUrls: initialState.nextPageUrls
            }
        case constants.SET_IS_SEARCH:
            return {
                ...state, 
                isSearch: action.data
            }
        case constants.SET_SEARCH_TEXT:
            return {
                ...state, 
                searchText: action.data
            }
        case constants.SET_SEARCH_RESULTS:
            return {
                ...state,
                searchResults: action.data
            }
        case constants.SET_PAGE_COUNT:
            return {
                ...state,
                pageCount: action.data
            }
    }
    return state;
}