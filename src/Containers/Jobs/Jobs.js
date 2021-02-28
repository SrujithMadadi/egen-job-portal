import React, { useEffect } from "react";
import {connect} from "react-redux";
import {getJobs} from "Store/ActionCreators/JobActions";
import Cards from "Components/Cards/Cards";
import SearchBar from "Components/SearchBar/SearchBar"
import * as Actions from "Store/Actions/Actions"
import "./jobs.css"

const Jobs=(props)=>{

	useEffect(()=>{
		let lat=""
		let long=""
		navigator.geolocation.getCurrentPosition(function(position) {
			lat=position.coords.latitude;
			long=position.coords.longitude
		});	  
		props.resetSearch()
		props.getJobs({lat,long})
	},[])

	return (
		<React.Fragment>
			<SearchBar />
			<div className="jobsContainer">
				{props.jobs.length>0?
					<Cards jobs={props.jobs}/>:null}
			</div>
		</React.Fragment>
	)
}

const mapStateToProps=(state)=>{
	return {
		jobs:state.jobsReducer.jobs
	}
}

const mapDispatchToProps=(dispatch)=>{
	return {
		getJobs:(searchObject)=>dispatch(getJobs(searchObject)),
		resetSearch:()=>dispatch({type:Actions.RESETSEARCH})
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Jobs);