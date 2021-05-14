import { spawn } from "redux-saga/effects";
import { watcherRandomNewsHomeScreen } from "../../../views/homeScreen/saga";
import { watcherCategoriesSearchScreen, 
    watcherChosenCategoryItems, watherSearchItems } from "../../../views/searchScreen/saga";

function* rootSaga() {
    try {
        yield spawn(watcherRandomNewsHomeScreen);
        yield spawn(watcherCategoriesSearchScreen);
        yield spawn(watcherChosenCategoryItems);
        yield spawn(watherSearchItems);
    } catch (e) {
        console.log('rootSaga error ', e);
    }
}

export default rootSaga;