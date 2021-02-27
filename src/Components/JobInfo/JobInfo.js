import React from "react";

const JobInfo=(props)=>{
	return (
		<div dangerouslySetInnerHTML={{__html:props.description}}></div>
	)
}

export default JobInfo