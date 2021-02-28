import React from "react";
import TypeSearch from "Components/TypeSearch/TypeSearch";
import TitleSearch from "Components/TitleSearch/TitleSearch";
import LocationSearch from "Components/LocationSearch/LocationSearch";
import "./SearchBar.css";

const SearchBar=(props)=>{
	return (
		<div className={props.darkTheme?"searchBarContainer darkTheme":"searchBarContainer"}>
			<TitleSearch {...props}/>
			<LocationSearch {...props}/>
			<TypeSearch {...props}/>
		</div>
	)
}

export default SearchBar