import { combineReducers } from "redux";
import { reducerHomeScreen } from "../../../views/homeScreen/redux";
import { reducerForSearchCategories } from "../../../views/searchScreen/redux";

const rootReducer = combineReducers({
    reducerHomeScreen,
    reducerForSearchCategories,
});

export default rootReducer;