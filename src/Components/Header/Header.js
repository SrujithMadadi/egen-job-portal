import React from "react";
import Switch from '@material-ui/core/Switch';
import WbSunnySharpIcon from '@material-ui/icons/WbSunnySharp';
import Brightness3SharpIcon from '@material-ui/icons/Brightness3Sharp';
import "./Header.css";

const Header=()=>{
	return (
		<div className="headerContainer">
			<div className="circle"></div>
			<div className="rectangle">
				<div className="headerTitle">devjobs</div>
				<div className="brightnessContainer">
					<WbSunnySharpIcon style={{fill: "#FFFFFF"}}/>
					<Switch color="primary" style={{fill: "#FFFFFF"}}/>
					<Brightness3SharpIcon style={{fill: "#FFFFFF"}}/>
				</div>
			</div>
		</div>
	)
}

export default Header