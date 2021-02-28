import React from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Jobs from "Containers/Jobs/Jobs";
import JobDetails from "Containers/JobDetails/JobDetails"
import { StylesProvider } from '@material-ui/core/styles';
import Header from "Components/Header/Header";

const App=()=>{
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

export default App