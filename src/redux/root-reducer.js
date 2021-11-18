import { combineReducers } from "redux";
import eventsReducers from "./reducer";

const rootReducer = combineReducers ({
	data: eventsReducers
});

export default rootReducer;