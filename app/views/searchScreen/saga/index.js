import { call, takeEvery, put, select } from "@redux-saga/core/effects";
import { sendRequest, urlFirstPart } from "../../../services/restApi";
import { constants } from "./actionTypes";
import { setCategoriesInfo, setChosenCategoryItems } from "../redux/action";

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

export function* workerChosenCategoryItems() {
    try {
        const chosenCategoryName = yield select(state => state.reducerForSearchCategories.chosenCategoryName);
        const chosenCategoryItems = yield call(sendRequest, urlFirstPart, chosenCategoryName);
        yield put(setChosenCategoryItems(chosenCategoryItems));
    } catch (e) {
        console.log('workerChosenCategoryItems error ', e);
    }
}

export function* watcherChosenCategoryItems() {
    yield takeEvery(constants.SET_CHOSEN_CATEGORY_ITEMS_SAGA, workerChosenCategoryItems);
}