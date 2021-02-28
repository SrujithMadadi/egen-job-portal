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
		props.getJobs({lat,long,page:props.page})
	},[])

	const nextJobs=()=>{
		props.incrementPage()
		props.getJobs({location:props.location,description:props.title,full_time:props.type,page:props.page+1})
	}
	return (
		<div className="jobsContainer">
			<SearchBar />
			{props.jobs.length>0?
				<Cards jobs={props.jobs} getJobs={nextJobs}/>:null}
		</div>
	)
}

const mapStateToProps=(state)=>{
	return {
		jobs:state.jobsReducer.jobs,
		page:state.jobsReducer.page,
		location:state.jobsReducer.location,
		title:state.jobsReducer.description,
		type:state.jobsReducer.full_time,
	}
}

const mapDispatchToProps=(dispatch)=>{
	return {
		getJobs:(searchObject)=>dispatch(getJobs(searchObject)),
		resetSearch:()=>dispatch({type:Actions.RESETSEARCH}),
		incrementPage:()=>dispatch({type:Actions.INCREMENTCOUNT})
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Jobs);