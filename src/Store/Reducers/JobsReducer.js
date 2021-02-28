/* eslint-disable camelcase */
import * as Actions from "Store/Actions/Actions";

const ruleMetricsState={
	jobs:[],
	description:"",
	location:"",
	full_time:false
}

const homeReducer=(state=ruleMetricsState,action)=>{
	switch(action.type){
	case Actions.GETJOBS:
		return {...state,jobs:[...action.jobs]}
	case Actions.SETJOBTYPE:
		return {...state,full_time:action.jobType}
	case Actions.SETJOBTITLE:
		return {...state,description:action.jobTitle}
	case Actions.SETJOBLOCATION:
		return {...state,location:action.location}
	case Actions.RESETSEARCH:
		return {...state,}
	default :
		return {...state,description:"",location:"",full_time:false}
	}
}

export default homeReducer;