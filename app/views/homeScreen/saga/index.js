import { call, takeEvery, put, select } from "@redux-saga/core/effects";

export function* tempWorker() {
    try {
        console.log(44444444444);
    } catch (e) {
        console.log('tempWorker error ', e);
    }
}

export function* tempWatcher() {
    yield takeEvery('TEMP_ACTION', tempWorker);
}