import React from "react";
import Card from "Components/Card/Card";
import Button from "Components/Button/Button";
import "./Cards.css"

const Cards=(props)=>{
	return (
		<React.Fragment>
			<div className="cardsContainer">
				{props.jobs.map(jobData=><Card jobData={jobData} key={jobData.id}/>)}
			</div>
			<Button buttontext="Load More" classes="loadMoreButton"/>
		</React.Fragment>
	)
}

export default Cards