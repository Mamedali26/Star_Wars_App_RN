import { call, takeEvery, put, select, all } from "@redux-saga/core/effects";
import { sendRequest, urlFirstPart, constantsForUrl } from "../../../services/restApi";
import { constants } from "./actionTypes";
import { setIsLoading, setRandomNewsItems } from "../redux/action";

export const getRandomNewsItem = (array) => {
    let number = Math.floor(Math.random() * array.length);
    return array[number];
}

export function* workerRandomNewsHomeScreen() {
    try {
        yield put(setIsLoading(true));
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

        for (let el of randomNewsItems) {
            el.isFavourite = false;
        }

        yield put(setRandomNewsItems(randomNewsItems));
        yield put(setIsLoading(false));
    } catch (e) {
        console.log('workerRandomNewsHomeScreen error ', e);
    }
}

export function* watcherRandomNewsHomeScreen() {
    yield takeEvery(constants.SET_HOME_SCREEN_SAGA, workerRandomNewsHomeScreen);
}