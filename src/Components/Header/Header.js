import React from "react";
import Switch from '@material-ui/core/Switch';
import WbSunnySharpIcon from '@material-ui/icons/WbSunnySharp';
import Brightness3SharpIcon from '@material-ui/icons/Brightness3Sharp';
import {connect} from "react-redux";
import * as Actions from "Store/Actions/Actions"
import "./Header.css";

const Header=(props)=>{
	return (
		<div className="headerContainer">
			<div className="circle"></div>
			<div className="rectangle">
				<div className="headerTitle">devjobs</div>
				<div className="brightnessContainer">
					<WbSunnySharpIcon style={{fill: "#FFFFFF"}}/>
					<Switch color="primary" style={{fill: "#FFFFFF"}} checked={props.darkTheme} onChange={()=>props.setDarkTheme()} value={props.darkTheme}/>
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