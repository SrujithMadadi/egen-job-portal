/* eslint-disable camelcase */
import React from "react";
import Checkbox from '@material-ui/core/Checkbox';
import Button from "Components/Button/Button";
import {connect} from "react-redux";
import * as Actions from "Store/Actions/Actions";
import {getJobs} from "Store/ActionCreators/JobActions";
import "./TypeSearch.css"

const TypeSearch=(props)=>{

	return (
		<div className="typeSearch searchField">
			<div className="jobTypeContainer">
				<Checkbox
					className="jobTypeCheckBox"
					color="default"
					disableRipple
					checked={props.type}
					onChange={()=>props.setType(!props.type)}
					inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
				/>
				<div className="fullTimeText">Full Time Only</div>
			</div>
			<Button buttontext="Search" search={()=>props.getJobs({location:props.location,description:props.title,full_time:props.type})}/>
		</div>
	)
}

const mapStateToProps=(state)=>{
	return {
		location:state.jobsReducer.location,
		title:state.jobsReducer.description,
		type:state.jobsReducer.full_time
	}
}

const mapDispatchToProps=(dispatch)=>{
	return {
		setType:(value)=>dispatch({type:Actions.SETJOBTYPE,jobType:value}),
		getJobs:(searchObject)=>dispatch(getJobs(searchObject))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(TypeSearch)