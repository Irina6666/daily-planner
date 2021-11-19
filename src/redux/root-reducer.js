import { combineReducers } from "redux";
import tacksReducers from "./reducer";

const rootReducer = combineReducers ({
	data: tacksReducers
});

export default rootReducer;