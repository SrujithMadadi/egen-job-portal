import * as Actions from "Store/Actions/Actions";

const initialState={
	job:[]
}

const jobDetailsReducer=(state=initialState,action)=>{
	switch(action.type){
	case Actions.GETJOBDETAILS:
		return {...state,job:action.jobDetails}
	default:
		return {...state}
	}
}

export default jobDetailsReducer