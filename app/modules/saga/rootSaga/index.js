import { spawn } from "redux-saga/effects";
import { watcherRandomNewsHomeScreen } from "../../../views/homeScreen/saga";
import { watcherCategoriesSearchScreen } from "../../../views/searchScreen/saga";

function* rootSaga() {
    try {
        yield spawn(watcherRandomNewsHomeScreen);
        yield spawn(watcherCategoriesSearchScreen);
    } catch (e) {
        console.log('rootSaga error ', e);
    }
}

export default rootSaga;