import * as Actions from "Store/Actions/Actions";

const ruleMetricsState={
	jobs:[]
}

const homeReducer=(state=ruleMetricsState,action)=>{
	switch(action.type){
	case Actions.GETJOBS:
		return {...state,jobs:[...action.jobs]}
	default :
		return {...state}
	}
}

export default homeReducer;