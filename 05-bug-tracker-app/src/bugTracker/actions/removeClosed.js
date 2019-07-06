import { remove } from '../services/bugApi';

export function removeClosed(){
	return function(dispatch, getState){
		let storeState = getState(),
			bugs = storeState.bugsData;
		let closedBugs = bugs.filter(bug => bug.isClosed);
		closedBugs
			.forEach(closedBug => {
				remove(closedBug)
					.then(response => {
						let action = { type : 'REMOVE', payload : closedBug};
						dispatch(action);				
					})
			})
		
	}
}