function bugsReducer(currentState = [], action){
	if (action.type === 'ADD_NEW'){
		let newBug = action.payload;
		let newState = [...currentState, newBug];
		return newState;
	}
	if (action.type === 'UPDATE'){
		let updatedBug = action.payload;
		let newState = currentState.map(bug => bug.id === updatedBug.id ? updatedBug : bug);
		return newState;
	}
	if (action.type === 'REMOVE_ALL'){
		let bugsToRemove = action.payload;
		let newState = currentState.filter(bug => bugsToRemove.indexOf(bug) === -1);
		return newState;
	}
	if (action.type === 'LOAD'){
		return action.payload;
	}
	return currentState;
}
export default bugsReducer;