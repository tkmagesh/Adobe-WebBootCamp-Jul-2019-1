import { createStore, combineReducers } from 'redux';
import bugsReducer from '../bugTracker/reducers';
import { spinnerReducer } from '../spinner';

var rootReducer = combineReducers({
	bugsData : bugsReducer,
	spinnerData : spinnerReducer
});

var appStore = createStore(rootReducer);

export default appStore;