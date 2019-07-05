function bugsReducer(currentState = [], action){
	if (action.type === 'ADD_NEW'){
		let newBug = action.payload;
		currentState.push(newBug);
		return currentState;
	}
	if (action.type === 'UPDATE'){
		let updatedBug = action.payload;
		return currentState.map(bug => bug.id === updatedBug.id ? updatedBug : bug);
	}
	if (action.type === 'REMOVE_ALL'){
		let bugsToRemove = action.payload;
		return currentState.filter(bug => bugsToRemove.indexOf(bug) === -1);	
	}
	return currentState;
}
export default bugsReducer;