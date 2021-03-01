import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import {connect} from "react-redux";
import * as Actions from "Store/Actions/Actions"
import "./TitleSearch.css"


const TitleSearch=(props)=>{
	return (
		<div className={props.darkTheme?"searchBar searchField darkCardTheme":"searchBar searchField"}>
			{props.deviceStatus?
				<React.Fragment>
					<div className="titleSearchIconContainer" onClick={props.getSearchResults}><SearchIcon color="primary"/></div>
					<i className="fas fa-filter"></i>
				</React.Fragment>:<SearchIcon color="primary"/>
			}
			<input placeholder="Filter by title, companies,expertise..." className={props.darkTheme?"searchInput darkCardTheme":"searchInput"} value={props.title} onChange={(event)=>props.setTitle(event.target.value)}/>
		</div>

	)
}

const mapStateToProps=(state)=>{
	return {
		title:state.jobsReducer.description,
		deviceStatus:state.jobsReducer.mobileStatus
	}
}

const mapDispatchToProps=(dispatch)=>{
	return {
		setTitle:(value)=>dispatch({type:Actions.SETJOBTITLE,jobTitle:value})
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(TitleSearch)