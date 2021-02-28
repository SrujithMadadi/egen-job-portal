import React,{useEffect} from "react";
import {connect} from "react-redux";
import {getJobDetails} from "Store/ActionCreators/JobDetailActions";
import JobInfo from "Components/JobInfo/JobInfo";
import JobTitle from "Components/JobTitle/JobTitle";
import Card from '@material-ui/core/Card';
import Apply from "Components/Apply/Apply"
import JobDetailsHeader from "Components/JobDetailsHeader/JobDetailsHeader";
import Button from "Components/Button/Button";
import "./JobDetails.css";

const JobDetails=(props)=>{

	useEffect(()=>{
		let searchString=props.location.search;
		props.getJobDetails(searchString.substring(searchString.indexOf("=")+1))
	},[])
    
	return (
		<React.Fragment>
			
			{
				props.jobDetails.length>0?
					<React.Fragment>
						<div className="jobDetails">
							<Card className="jobDetailsContainer jobDetailsHeader">	
								<JobDetailsHeader jobDetails={props.jobDetails[0]}/>
							</Card>
							<Card className="jobDetailsContainer">
								<JobTitle jobDetails={props.jobDetails[0]}/>
								<JobInfo description={props.jobDetails[0].description}/>
							</Card>
							<Card className="jobDetailsContainer howToapplyContainer" >
								<Apply applyText={props.jobDetails[0].how_to_apply} />
							</Card>
						</div>
						<div className="applyContainer">
							<div className="applyContainerJobInfo">
								<div className="jobTitle">{props.jobDetails[0].title}</div>
								<div className="jobLocation">{props.jobDetails[0].location}</div>
							</div>
							<Button buttontext="Apply Now" classes="applyButton"/>
						</div>
					</React.Fragment>
					:null
			}
		</React.Fragment>
	)
}

const mapStateToProps=(state)=>{
	return {
		jobDetails:state.jobDetailsReducer.job
	}
}

const mapDispatchToProps=(dispatch)=>{
	return {
		getJobDetails:(jobId)=>dispatch(getJobDetails(jobId))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(JobDetails)