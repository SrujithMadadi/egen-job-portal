/* eslint-disable camelcase */
import React from "react";
import Checkbox from '@material-ui/core/Checkbox';
import Button from "Components/Button/Button";
import {connect} from "react-redux";
import * as Actions from "Store/Actions/Actions";
import "./TypeSearch.css"

const TypeSearch=(props)=>{

	return (
		<div className={props.darkTheme?"typeSearch searchField darkCardTheme":"typeSearch searchField"}>
			<div className="jobTypeContainer">
				<Checkbox
					className="jobTypeCheckBox"
					color="default"
					disableRipple
					checked={props.type}
					onChange={()=>props.setType(!props.type)}
					inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
				/>
				<div className={props.darkTheme?"fullTimeText fullTimeTextDarkTheme":"fullTimeText"}>Full Time Only</div>
			</div>
			<Button buttontext="Search" search={props.getSearchResults}/>
		</div>
	)
}

const mapStateToProps=(state)=>{
	return {
		location:state.jobsReducer.location,
		title:state.jobsReducer.description,
		type:state.jobsReducer.full_time,
		page:state.jobsReducer.page
	}
}

const mapDispatchToProps=(dispatch)=>{
	return {
		setType:(value)=>dispatch({type:Actions.SETJOBTYPE,jobType:value})
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(TypeSearch)