import { call, takeEvery, put, select, all } from "@redux-saga/core/effects";
import { sendRequest, urlFirstPart, constantsForUrl } from "../../../services/restApi";
import { constants } from "./actionTypes";
import { setCategoriesInfo } from "../redux/action";

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