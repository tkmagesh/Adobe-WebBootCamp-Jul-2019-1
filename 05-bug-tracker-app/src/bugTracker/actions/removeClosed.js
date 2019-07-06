import { remove } from '../services/bugApi';

export function removeClosed(bugs){
	return function(dispatch){
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