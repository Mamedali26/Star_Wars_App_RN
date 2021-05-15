import { spawn } from "redux-saga/effects";
import { watcherChosenCategoryItems } from "../../../views/chosenCategoryScreen/saga";
import { watcherRandomNewsHomeScreen } from "../../../views/homeScreen/saga";
import { watcherCategoriesSearchScreen, watherSearchItems } from "../../../views/searchScreen/saga";

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