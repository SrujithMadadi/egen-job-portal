import React from "react";
import Button from "Components/Button/Button";
import "./JobDetailsHeader.css";

const JobDetailsHeader=(props)=>{
	return (
		<React.Fragment>
			<div className="jobDetailsHeaderLogoContainer">
				<img src={props.jobDetails.company_logo} alt="companyLogo"></img>
			</div>
			<div className="jobDetailsHeaderCompanyDetailsContainer">
				<div>
					<p>{props.jobDetails.company}</p>
					<p className="lightText">{props.jobDetails.company_url}</p>
				</div>
				<Button buttontext="Company Site" classes="companySiteButton"/>
			</div>
		</React.Fragment>	

	)
}

export default JobDetailsHeader