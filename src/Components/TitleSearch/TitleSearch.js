import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import "./TitleSearch.css"


const TitleSearch=()=>{
	return (
		<div className="searchBar searchField">
			<SearchIcon color="primary"/>
			<input placeholder="Filter by title, companies,expertise..." className="searchInput"/>
		</div>

	)
}

export default TitleSearch