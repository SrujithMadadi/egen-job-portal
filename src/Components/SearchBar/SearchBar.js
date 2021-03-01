import React from "react";
import TypeSearch from "Components/TypeSearch/TypeSearch";
import TitleSearch from "Components/TitleSearch/TitleSearch";
import LocationSearch from "Components/LocationSearch/LocationSearch";
import * as Actions from "Store/Actions/Actions";
import {connect} from "react-redux";
import {getJobs} from "Store/ActionCreators/JobActions";
import "./SearchBar.css";

const SearchBar=(props)=>{

	const getSearchResults=()=>{
		props.resetPage()
		props.getJobs({location:props.location,description:props.title,full_time:props.type,page:1})
	}

	return (
		<div className={props.darkTheme?"searchBarContainer darkTheme":"searchBarContainer"}>
			<TitleSearch {...props} getSearchResults={getSearchResults}/>
			<LocationSearch {...props} />
			<TypeSearch {...props} getSearchResults={getSearchResults}/>
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
		setType:(value)=>dispatch({type:Actions.SETJOBTYPE,jobType:value}),
		getJobs:(searchObject)=>dispatch(getJobs(searchObject)),
		resetPage:()=>dispatch({type:Actions.RESETPAGE})
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar)