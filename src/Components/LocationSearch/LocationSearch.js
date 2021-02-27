import React from "react";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import "./LocationSearch.css";

const LocationSearch=()=>{

	return (
		<div className="locationSearch searchField">
			<LocationOnIcon color="primary"/>
			<input placeholder="Filter by location..." className="searchInput"/>
		</div>
	)
}

export default LocationSearch