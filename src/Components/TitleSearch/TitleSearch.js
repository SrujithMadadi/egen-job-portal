import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import {connect} from "react-redux";
import * as Actions from "Store/Actions/Actions"
import "./TitleSearch.css"


const TitleSearch=(props)=>{
	return (
		<div className="searchBar searchField">
			<SearchIcon color="primary"/>
			<input placeholder="Filter by title, companies,expertise..." className="searchInput" value={props.title} onChange={(event)=>props.setTitle(event.target.value)}/>
		</div>

	)
}

const mapStateToProps=(state)=>{
	return {
		title:state.jobsReducer.description
	}
}

const mapDispatchToProps=(dispatch)=>{
	return {
		setTitle:(value)=>dispatch({type:Actions.SETJOBTITLE,jobTitle:value})
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(TitleSearch)