import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import {withRouter} from "react-router-dom"
import "./Card.css"

const JobCard=(props)=>{

	return (
		<Card className="cardContainer" onClick={()=>props.history.push("/jobDetails?jobId="+props.jobData.id)}>
			<div className="logoContainer">
				<img src={props.jobData.logo} alt="imageLogo" />
			</div>
			<CardActionArea>
				<CardContent className="cardContentContainer">
					<Typography variant="body2" color="textSecondary" component="div" className="cardContent">
						<div className="jobInformationContainer">
							<div className="typeContainer">
								<div>{props.jobData.time}</div>
								<div>{props.jobData.type}</div>
							</div>
							<div className="jobTitle">{props.jobData.title}</div>
							<div className="jobCompany">{props.jobData.company}</div>
						</div>
						<div className="jobLocation">{props.jobData.location}</div>
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	)
}

export default withRouter(JobCard)