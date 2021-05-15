import { combineReducers } from "redux";
import { reducerFavouritesScreen } from "../../../views/favouritesScreen/redux";
import { reducerHomeScreen } from "../../../views/homeScreen/redux";
import { reducerForSearchCategories } from "../../../views/searchScreen/redux";
import { reducerForSplashScreen } from "../../../views/splashScreen/redux";

const rootReducer = combineReducers({
    reducerHomeScreen,
    reducerForSearchCategories,
    reducerFavouritesScreen,
    reducerForSplashScreen,
});

export default rootReducer;