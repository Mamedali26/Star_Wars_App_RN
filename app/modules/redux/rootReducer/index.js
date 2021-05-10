import { combineReducers } from "redux";
import { reducerHomeScreen } from "../../../views/homeScreen/redux";

const rootReducer = combineReducers({
    reducerHomeScreen,
});

export default rootReducer;