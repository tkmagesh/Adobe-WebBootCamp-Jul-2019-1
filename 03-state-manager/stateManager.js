var SM = (function(){
	var _currentState,
		_subscribers = [],
		_reducer;

	function getState(){
		return _currentState;
	}

	function subscribe(callback){
		_subscribers.push(callback);
	}

	function triggerChange(){
		_subscribers.forEach(subscriber => subscriber());
	}

	function dispatch(action){
		var result = _reducer(_currentState, action);
		if (result === _currentState) return;
		_currentState = result;
		triggerChange();
	}

	function createStore(reducer){
		_reducer = reducer;
		var store = { getState, subscribe, dispatch };
		return store;
	}

	return { createStore };

})();