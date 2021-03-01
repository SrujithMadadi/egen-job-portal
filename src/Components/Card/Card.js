import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import * as Actions from "Store/Actions/Actions"
import "./Card.css"

const JobCard=(props)=>{
	
	const redirectToJobDetails=()=>{
		props.resetJobDetails()
		props.history.push("/jobDetails?jobId="+props.jobData.id)
	}

	return (
		<Card className={props.darkTheme?"cardContainer darkCardTheme":"cardContainer"} onClick={redirectToJobDetails}>
			<div className="logoContainer">
				{props.jobData.logo?<img src={props.jobData.logo} alt="imageLogo" className="cardLogo"/>:null}
			</div>
			<CardActionArea>
				<CardContent className="cardContentContainer">
					<Typography variant="body2" color="textSecondary" component="div" className="cardContent">
						<div className="jobInformationContainer">
							<div className="typeContainer lightText">
								<div>{props.jobData.time}</div>
								<div>{props.jobData.type}</div>
							</div>
							<div className={props.darkTheme?"jobTitle darkThemeJobTitle":"jobTitle"}>{props.jobData.title}</div>
							<div className="lightText">{props.jobData.company}</div>
						</div>
						<div className="jobLocation">{props.jobData.location}</div>
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	)
}

const mapDispatchToProps=(dispatch)=>{
	return {
		resetJobDetails:()=>dispatch({type:Actions.RESETJOBDETAILS})
	}
}

export default withRouter(connect(null,mapDispatchToProps)(JobCard))