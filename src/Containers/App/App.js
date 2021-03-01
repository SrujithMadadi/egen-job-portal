import React, { useEffect } from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import { StylesProvider } from '@material-ui/core/styles';
import { useMediaQuery } from 'react-responsive';
import {connect} from "react-redux"
import Jobs from "Containers/Jobs/Jobs";
import JobDetails from "Containers/JobDetails/JobDetails"
import Header from "Components/Header/Header";
import * as Actions from "Store/Actions/Actions"

const App=(props)=>{

	const isMobile=useMediaQuery({
		query: '(max-width: 768px)'
	})

	useEffect(()=>{
		props.setDeviceStatus(isMobile)
	})

	return (
		<StylesProvider injectFirst>
			<BrowserRouter>
				<Header />
				<Switch>
					<Route path="/" exact component={Jobs}/>
					<Route path="/jobDetails" exact component={JobDetails} />
				</Switch>
			</BrowserRouter>
		</StylesProvider>
	)
}

const mapDisptachToProps=(dispatch)=>{
	return {
		setDeviceStatus:(status)=>dispatch({type:Actions.SETDEVICESTATUS,status:status})
	}
}

export default connect(null,mapDisptachToProps)(App)