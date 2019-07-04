var SM = (function(){
	var _currentState,
		_subscribers = [],
		_reducer,
		_init_action = { type : '@@INIT' };

	function getState(){
		return _currentState;
	}

	function subscribe(callback){
		_subscribers.push(callback);
	}

	function triggerChange(){
		_subscribers.forEach(callback => callback());
	}

	function dispatch(action){
		var result = _reducer(_currentState, action);
		if (result === _currentState) return;
		_currentState = result;
		triggerChange();
	}

	function createStore(reducer){
		_reducer = reducer;
		_currentState = _reducer(undefined, _init_action)
		var store = { getState, subscribe, dispatch };
		return store;
	}

	function bindActionCreators(actionCreators, dispatch){
		var actionDispatchers = {};
		for(let key in actionCreators){
			actionDispatchers[key] = function(...args){
				let action = actionCreators[key](...args);
				dispatch(action);
			}
		}
		return actionDispatchers;
	}

	return { createStore, bindActionCreators };

})();