import * as Actions from "Store/Actions/Actions";

const initialState={
	job:[]
}

const jobDetailsReducer=(state=initialState,action)=>{
	switch(action.type){
	case Actions.GETJOBDETAILS:
		return {...state,job:action.jobDetails}
	case Actions.RESETJOBDETAILS:
		return {...state,job:[]}
	default:
		return {...state}
	}
}

export default jobDetailsReducer