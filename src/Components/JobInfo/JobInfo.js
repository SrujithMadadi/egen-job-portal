import React from "react";
import "./JobInfo.css";

const JobInfo=(props)=>{
	return (
		<div dangerouslySetInnerHTML={{__html:props.description}} className={props.darkTheme?"jobDetailsDescriptionDarkTheme":"jobDetailsDescription"}></div>
	)
}

export default JobInfo