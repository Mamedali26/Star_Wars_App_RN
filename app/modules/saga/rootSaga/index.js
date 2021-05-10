import { spawn } from "redux-saga/effects";
import { tempWatcher } from "../../../views/homeScreen/saga";

function* rootSaga() {
    try {
        yield spawn(tempWatcher);
    } catch (e) {
        console.log('rootSaga error ', e);
    }
}

export default rootSaga;