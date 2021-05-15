import { call, put, select, takeEvery } from "@redux-saga/core/effects";
import { getChosenCategory } from "../../../modules/saga/selectors";
import { sendRequest, urlFirstPart, nextPage } from "../../../services/restApi";
import { setChosenCategoryItems, setNextPageUrls } from "../../searchScreen/redux/action";
import { constants } from "./actionTypes";

export function* workerChosenCategoryItems() {
    try {
        const chosenCategoryName = yield select(getChosenCategory);
        let pageCount = yield select(state => state.reducerForSearchCategories.pageCount);
        console.log('pageCount', pageCount);
        const chosenCategoryItems = yield call(sendRequest, urlFirstPart, chosenCategoryName, 
            nextPage + pageCount);
        console.log('chosenCategoryItems?.next', chosenCategoryItems?.next);
        if (chosenCategoryItems?.next || chosenCategoryItems?.next === null) {
            yield put(setNextPageUrls(chosenCategoryItems?.next));
            yield put(setChosenCategoryItems(chosenCategoryItems?.results));
        }
    } catch (e) {
        console.log('workerChosenCategoryItems error ', e);
    }
}

export function* watcherChosenCategoryItems() {
    yield takeEvery(constants.SET_CHOSEN_CATEGORY_ITEMS_SAGA, workerChosenCategoryItems);
}