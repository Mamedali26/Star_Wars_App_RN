import { spawn } from "redux-saga/effects";
import { watcherChosenCategoryItems, watcherLoadMoreItems } from "../../../views/chosenCategoryScreen/saga";
import { watcherRandomNewsHomeScreen } from "../../../views/homeScreen/saga";
import { watcherCategoriesSearchScreen, watherSearchItems } from "../../../views/searchScreen/saga";

function* rootSaga() {
    try {
        yield spawn(watcherRandomNewsHomeScreen);
        yield spawn(watcherCategoriesSearchScreen);
        yield spawn(watcherChosenCategoryItems);
        yield spawn(watherSearchItems);
        //yield spawn(watcherLoadMoreItems);
    } catch (e) {
        console.log('rootSaga error ', e);
    }
}

export default rootSaga;