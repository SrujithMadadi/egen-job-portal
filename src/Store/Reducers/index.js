import {combineReducers} from "redux";
import JobsReducer from "Store/Reducers/JobsReducer";
import JobDetailsReducer from "Store/Reducers/JobDetailsReducer";

const rootReducer=combineReducers(({
	jobsReducer:JobsReducer,
	jobDetailsReducer:JobDetailsReducer
}))

export default rootReducer