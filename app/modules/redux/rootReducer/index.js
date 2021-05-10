import { combineReducers } from "redux";
import { tempReducer } from "../../../views/homeScreen/redux";

const rootReducer = combineReducers({
    tempReducer,
});

export default rootReducer;