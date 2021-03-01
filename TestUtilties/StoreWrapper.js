import React from "react";
import {createStore,applyMiddleware} from "redux";
import Reducer from "Store/Reducers/index";
import { createMemoryHistory } from 'history';
import {Provider} from 'react-redux';
import {Router} from "react-router-dom";
import {render} from "@testing-library/react";
import thunk from 'redux-thunk';

const StoreWrapper = (
	component,
	{ store = createStore(Reducer,applyMiddleware(thunk)) } = {},
	{route = '/',
		history = createMemoryHistory({ initialEntries: [route] })}={}
) => {
	return {
		...render(
			<Provider store={store}>
				<Router history={history}>{component}</Router>
			</Provider>
		),
		store,
		history
	}
}

export default StoreWrapper
