import React from "react";
// import Switch from '@material-ui/core/Switch';
import WbSunnySharpIcon from '@material-ui/icons/WbSunnySharp';
import Brightness3SharpIcon from '@material-ui/icons/Brightness3Sharp';
import {connect} from "react-redux";
import CustomSwitch from "Components/Switch/Switch"
import * as Actions from "Store/Actions/Actions"
import "./Header.css";

const Header=(props)=>{
	return (
		<div className={props.darkTheme?"headerContainer darkTheme":"headerContainer lightTheme"}>
			<div className="circle"></div>
			<div className="rectangle">
				<div className="headerTitle">devjobs</div>
				<div className="brightnessContainer">
					<WbSunnySharpIcon style={{fill: "#FFFFFF"}}/>
					<CustomSwitch checked={props.darkTheme} change={()=>props.setDarkTheme()} value={props.darkTheme}/>
					<Brightness3SharpIcon style={{fill: "#FFFFFF"}}/>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps=(state)=>{
	return {
		darkTheme:state.jobsReducer.darkTheme
	}
}

const mapDispatchToProps=(dispatch)=>{
	return {
		setDarkTheme:()=>dispatch({type:Actions.SETDARKTHEME})
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)