import { createStore } from 'redux';
import { applyMiddleware, compose } from 'redux';

import {composeWithDevtools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState={};

const composeEnhancer=window.__Redux_DEVTOOLS_EXTENTION_COMPOSE__ || compose;
const store=createStore(rootReducer,initialState,composeEnhancer(applyMiddleware(thunk)));


export default store;
