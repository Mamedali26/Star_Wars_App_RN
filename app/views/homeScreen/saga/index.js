import { call, takeEvery, put, all, delay } from "@redux-saga/core/effects";
import { sendRequest, urlFirstPart, constantsForUrl } from "../../../services/restApi";
import { constants } from "./actionTypes";
import { setIsLoading, setRandomNewsItems } from "../redux/action";
import { setIsSplash } from "../../splashScreen/redux/action";

export const getRandomNewsItem = (array) => {
    let number = Math.floor(Math.random() * array.length);
    return array[number];
}

export function* workerRandomNewsHomeScreen() {
    try {
        const { people, films, planets, vehicles, species, starships } = yield all({
            people: call(sendRequest, urlFirstPart, constantsForUrl.people),
            films: call(sendRequest, urlFirstPart, constantsForUrl.films),
            planets: call(sendRequest, urlFirstPart, constantsForUrl.planets),
            vehicles: call(sendRequest, urlFirstPart, constantsForUrl.vehicles),
            species: call(sendRequest, urlFirstPart, constantsForUrl.species),
            starships: call(sendRequest, urlFirstPart, constantsForUrl.starships),
        });
        const { randomPeopleItem, randomFilmItem, randomPlanetItem, randomVehicleItem, 
            randomSpeciesItem, randomStarshipItem } = yield all({
            randomPeopleItem: call(getRandomNewsItem, people?.results),
            randomFilmItem: call(getRandomNewsItem, films?.results),
            randomPlanetItem: call(getRandomNewsItem, planets?.results),
            randomVehicleItem: call(getRandomNewsItem, vehicles?.results),
            randomSpeciesItem: call(getRandomNewsItem, species?.results),
            randomStarshipItem: call(getRandomNewsItem, starships?.results),
        });
        const randomNewsItems = [randomPeopleItem, randomFilmItem, randomPlanetItem,
            randomVehicleItem, randomSpeciesItem, randomStarshipItem];

        yield put(setRandomNewsItems(randomNewsItems));
        yield delay(4900);
        yield put(setIsSplash(false));
    } catch (e) {
        console.log('workerRandomNewsHomeScreen error ', e);
    }
}

export function* watcherRandomNewsHomeScreen() {
    yield takeEvery(constants.SET_HOME_SCREEN_SAGA, workerRandomNewsHomeScreen);
}