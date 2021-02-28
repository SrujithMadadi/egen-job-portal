/* eslint-disable camelcase */
import * as Actions from "Store/Actions/Actions";

const initialState={
	jobs:[],
	description:"",
	location:"",
	full_time:false,
	page:1,
	darkTheme:false
}

const homeReducer=(state=initialState,action)=>{
	switch(action.type){
	case Actions.GETJOBS:
		return {...state,jobs:state.page===1?action.jobs:[...state.jobs,...action.jobs]}
	case Actions.SETJOBTYPE:
		return {...state,full_time:action.jobType}
	case Actions.SETJOBTITLE:
		return {...state,description:action.jobTitle}
	case Actions.SETJOBLOCATION:
		return {...state,location:action.location}
	case Actions.RESETSEARCH:
		return {...state,description:"",location:"",full_time:false,page:1}
	case Actions.INCREMENTCOUNT:
		return {...state,page:state.page+1}
	case Actions.RESETPAGE:
		return {...state,page:1}
	case Actions.SETDARKTHEME:
		return {...state,darkTheme:!state.darkTheme}
	default :
		return {...state}
	}
}

export default homeReducer;