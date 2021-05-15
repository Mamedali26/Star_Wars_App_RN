import { call, takeEvery, put, select } from "@redux-saga/core/effects";
import { sendRequest, urlFirstPart, constantForSearch } from "../../../services/restApi";
import { constants } from "./actionTypes";
import { setCategoriesInfo, setChosenCategoryItems, setSearchResults } from "../redux/action";
import { getChosenCategory, getSearchText } from "../../../modules/saga/selectors";
import { setIsLoading } from "../../homeScreen/redux/action";

export function* workerCategoriesSearchScreen() {
    try {
        const categoriesObject = yield call(sendRequest, urlFirstPart);
        const categoriesInfoArray = yield call(Object.entries, categoriesObject);
        yield put(setCategoriesInfo(categoriesInfoArray));
    } catch (e) {
        console.log('workerCategoriesSearchScreen error ', e);
    }
}

export function* watcherCategoriesSearchScreen() {
    yield takeEvery(constants.SET_CATEGORIES_SCREEN_SAGA, workerCategoriesSearchScreen);
}

// export function* workerChosenCategoryItems() {
//     try {
//         yield put(setIsLoading(true));
//         const chosenCategoryName = yield select(getChosenCategory);
//         const chosenCategoryItems = yield call(sendRequest, urlFirstPart, chosenCategoryName);
//         yield put(setChosenCategoryItems(chosenCategoryItems));
//         yield put(setIsLoading(false));
//     } catch (e) {
//         console.log('workerChosenCategoryItems error ', e);
//     }
// }

// export function* watcherChosenCategoryItems() {
//     yield takeEvery(constants.SET_CHOSEN_CATEGORY_ITEMS_SAGA, workerChosenCategoryItems);
// }

export function* workerSearchItems() {
    try {
        yield put(setIsLoading(true));
        const searchText = yield select(getSearchText);
        const chosenCategoryName = yield select(getChosenCategory);
        if (searchText) {            
            const searchResults = yield call(sendRequest, urlFirstPart, chosenCategoryName, 
                constantForSearch + searchText);
            yield put(setSearchResults(searchResults));
        }
        yield put(setIsLoading(false));
    } catch (e) {
        console.log('workerSearchItems error', e);
    }
}

export function* watherSearchItems() {
    yield takeEvery(constants.SET_SEARCH_ITEMS_SAGA, workerSearchItems);
}