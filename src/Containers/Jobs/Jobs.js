import React, { useEffect } from "react";
import {connect} from "react-redux";
import {getJobs} from "Store/ActionCreators/JobActions";
import Cards from "Components/Cards/Cards";
import Header from "Components/Header/Header";
import SearchBar from "Components/SearchBar/SearchBar"
import "./jobs.css"

const Jobs=(props)=>{

	useEffect(()=>{
		let latitude=""
		let longitude=""
		navigator.geolocation.getCurrentPosition(function(position) {
			latitude=position.coords.latitude;
			longitude=position.coords.longitude
		});	  
		props.getJobs(latitude,longitude)
	},[])

	return (
		<React.Fragment>
			<Header />
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
		getJobs:(latitude,longitude)=>dispatch(getJobs(latitude,longitude))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Jobs);