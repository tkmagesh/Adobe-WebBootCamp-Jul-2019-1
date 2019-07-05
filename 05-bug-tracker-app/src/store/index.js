import { createStore, combineReducers, applyMiddleware } from 'redux';
import bugsReducer from '../bugTracker/reducers';
import { spinnerReducer } from '../spinner';
import thunk from 'redux-thunk';

  
var rootReducer = combineReducers({
	bugsData : bugsReducer,
	spinnerData : spinnerReducer
});

var appStore = createStore(rootReducer, applyMiddleware(thunk));

export default appStore;