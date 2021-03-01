import React from "react";
import "./Apply.css";

const Apply=(props)=>{
	return (
		<div>
			<div data-testid="howToApplyText">How to Apply</div>
			<div data-testid="howToApplyDescription" dangerouslySetInnerHTML={{__html:props.applyText}}></div>
		</div>
	)
}

export default Apply;

