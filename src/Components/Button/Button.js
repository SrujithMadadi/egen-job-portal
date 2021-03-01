import React from "react";
import Button from '@material-ui/core/Button';
import "./Button.css"

const CustomButton=(props)=>{
	return (
		<Button variant="contained" className={"customButton "+props.classes} onClick={props.search} data-testid="customButtonTestId">
			{props.buttontext}
		</Button>
	)
}

export default CustomButton