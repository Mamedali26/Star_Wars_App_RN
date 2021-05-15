import { constants } from "./actionTypes";

export const setIsSplash = data => ({
    type: constants.SET_IS_SPLASH,
    data,
});