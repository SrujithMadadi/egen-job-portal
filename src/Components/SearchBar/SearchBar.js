import React from "react";
import TypeSearch from "Components/TypeSearch/TypeSearch";
import TitleSearch from "Components/TitleSearch/TitleSearch";
import LocationSearch from "Components/LocationSearch/LocationSearch";
import "./SearchBar.css";

const SearchBar=()=>{
	
	return (
		<div className="searchBarContainer">
			<TitleSearch />
			<LocationSearch />
			<TypeSearch />
		</div>
	)
}

export default SearchBar