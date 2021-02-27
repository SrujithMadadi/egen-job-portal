import React from "react";
import Card from "Components/Card/Card";
import "./Cards.css"

const Cards=(props)=>{
	return (
		<div className="cardsContainer">
			{props.jobs.map(jobData=><Card jobData={jobData} key={jobData.id}/>)}
		</div>
	)
}

export default Cards