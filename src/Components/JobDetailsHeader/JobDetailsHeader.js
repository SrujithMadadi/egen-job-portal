import React from "react";
import Button from "Components/Button/Button";
import "./JobDetailsHeader.css";

const JobDetailsHeader=(props)=>{

	const goToCompanyWebsite=(link)=>{
		window.location.href=link
	}

	return (
		<React.Fragment>
			<div className="jobDetailsHeaderLogoContainer">
				<img src={props.jobDetails.company_logo} alt="companyLogo"></img>
			</div>
			<div className="jobDetailsHeaderCompanyDetailsContainer">
				<div>
					<p className={props.darkTheme?"jobDetailsHeaderCompanyText":""}>{props.jobDetails.company}</p>
					<p className="lightText">{props.jobDetails.company_url}</p>
				</div>
				<Button buttontext="Company Site" classes="companySiteButton" search={()=>goToCompanyWebsite(props.jobDetails.company_url)}/>
			</div>
		</React.Fragment>	

	)
}

export default JobDetailsHeader