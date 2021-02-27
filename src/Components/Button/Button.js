import React from "react";
import Button from '@material-ui/core/Button';
import "./Button.css"

const CustomButton=(props)=>{
	return (
		<Button variant="contained" className={props.classes+" customButton"}>
			{props.buttontext}
		</Button>
	)
}

export default CustomButton