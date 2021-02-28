import React from "react";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {connect} from "react-redux";
import * as Actions from "Store/Actions/Actions"
import "./LocationSearch.css";

const LocationSearch=(props)=>{

	return (
		<div className={props.darkTheme?"locationSearch searchField darkCardTheme":"locationSearch searchField"}>
			<LocationOnIcon color="primary"/>
			<input placeholder="Filter by location..." className={props.darkTheme?"searchInput darkCardTheme":"searchInput"} value={props.location} onChange={(event)=>props.setLocation(event.target.value)}/>
		</div>
	)
}

const mapStateToProps=(state)=>{
	return {
		location:state.jobsReducer.location
	}
}

const mapDispatchToProps=(dispatch)=>{
	return {
		setLocation:(value)=>dispatch({type:Actions.SETJOBLOCATION,location:value})
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(LocationSearch)