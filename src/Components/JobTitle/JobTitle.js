import React from "react";
import Button from "Components/Button/Button";
import "Components/Card/Card.css"
import "./JobTitle.css"

const JobTitle=(props)=>{
	return (
		<div className="JobTitleContainer">
			<div className="jobTitleInfoContainer">
				<div className="typeContainer lightText">
					<div>{props.jobDetails.time}</div>
					<div>{props.jobDetails.type}</div>
				</div>
				<div className={props.darkTheme?"jobTitle darkThemeTitle":"jobTitle"}>{props.jobDetails.title}</div>
				<div className="jobLocation">{props.jobDetails.location}</div>
			</div>
			<Button buttontext="Apply Now" classes="applyButton"/>
		</div>
	)
}

export default JobTitle