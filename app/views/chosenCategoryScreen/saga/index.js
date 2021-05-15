// import { call, takeEvery, put, select } from "@redux-saga/core/effects";
// import { sendRequest, urlFirstPart, nextPage } from "../../../services/restApi";
// import { constants } from "./actionTypes";
// import { getChosenCategory, getChosenCategoryItemsInfo } from "../../../modules/saga/selectors";
// import { setLoadMoreItems, setChosenCategoryItems } from "../../searchScreen/redux/action";

// const chosenCategoryItemsInfo = [];
// const chosenCategoryItems = [];
// let count = 0;

// export function* workerLoadMoreItems() {
//     try {
//         const chosenCategoryName  = yield select(getChosenCategory);
//         //const chosenCategoryItemsInfo = yield select(getChosenCategoryItemsInfo);
//         const nextPageItems = yield call(sendRequest, urlFirstPart, chosenCategoryName, nextPage + ++count);
//             //getNextPageNumber(chosenCategoryItemsInfo?.next));  
//         chosenCategoryItemsInfo.push(nextPageItems?.url);
//         chosenCategoryItems.push(...nextPageItems?.results);
//         yield put(setLoadMoreItems(chosenCategoryItemsInfo));
//         yield put(setChosenCategoryItems(chosenCategoryItems))
//         //console.log('chosenCategoryItems', chosenCategoryItems);
//     } catch (e) {
//         console.log('workerLoadMoreItems', e);
//     }
// }

// export function* watcherLoadMoreItems() {
//     yield takeEvery(constants.SET_LOAD_MORE_ITEMS_SAGA, workerLoadMoreItems);
// }

import { call, put, select, takeEvery } from "@redux-saga/core/effects";
import { getChosenCategory } from "../../../modules/saga/selectors";
import { sendRequest, urlFirstPart, nextPage } from "../../../services/restApi";
import { setChosenCategoryItems, setNextPageUrls, setPageCount } from "../../searchScreen/redux/action";
import { constants } from "./actionTypes";

export function* workerChosenCategoryItems() {
    try {
        const chosenCategoryName = yield select(getChosenCategory);
        let pageCount = yield select(state => state.reducerForSearchCategories.pageCount);
        console.log('pageCount', pageCount);
        const chosenCategoryItems = yield call(sendRequest, urlFirstPart, chosenCategoryName, 
            nextPage + pageCount);
        if (chosenCategoryItems?.next || chosenCategoryItems?.next === null) {
            yield put(setNextPageUrls(chosenCategoryItems?.next));
        }
        yield put(setChosenCategoryItems(chosenCategoryItems?.results));
    } catch (e) {
        console.log('workerChosenCategoryItems error ', e);
    }
}

export function* watcherChosenCategoryItems() {
    yield takeEvery(constants.SET_CHOSEN_CATEGORY_ITEMS_SAGA, workerChosenCategoryItems);
}