import { createStore, combineReducers, applyMiddleware } from 'redux';
import bugsReducer from '../bugTracker/reducers';
import { spinnerReducer } from '../spinner';
import thunk from 'redux-thunk';


/*function myLogger(store){
	return function(next){
		return function(action){
			console.group(`action-${action}`)
			console.log('before - ', store.getState())
			let result = next(action);
			console.log('after - ', store.getState());
			console.groupEnd();
			return result;
		}
	}
}*/


  
var rootReducer = combineReducers({
	bugsData : bugsReducer,
	spinnerData : spinnerReducer
});

var appStore = createStore(rootReducer, applyMiddleware(thunk));

export default appStore;