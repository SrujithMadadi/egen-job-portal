import React,{ useState } from "react";
import Checkbox from '@material-ui/core/Checkbox';
import Button from "Components/Button/Button";
import "./TypeSearch.css"

const TypeSearch=()=>{
	const [checked,setChecked]=useState(false)
	return (
		<div className="typeSearch searchField">
			<div className="jobTypeContainer">
				<Checkbox
					className="jobTypeCheckBox"
					color="default"
					disableRipple
					checked={checked}
					onChange={()=>setChecked(!checked)}
					inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
				/>
				<div className="fullTimeText">Full Time Only</div>
			</div>
			<Button buttontext="Search"/>
		</div>
	)
}

export default TypeSearch