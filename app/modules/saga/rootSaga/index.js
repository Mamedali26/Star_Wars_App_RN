import { spawn } from "redux-saga/effects";
import { watcherRandomNewsHomeScreen } from "../../../views/homeScreen/saga";

function* rootSaga() {
    try {
        yield spawn(watcherRandomNewsHomeScreen);
    } catch (e) {
        console.log('rootSaga error ', e);
    }
}

export default rootSaga;