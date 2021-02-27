import React from "react";
import "./Apply.css";

const Apply=(props)=>{
	return (
		<div>
			<div>How to Apply</div>
			<div dangerouslySetInnerHTML={{__html:props.applyText}}></div>
		</div>
	)
}

export default Apply;

