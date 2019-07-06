import { save } from '../services/bugApi';

export function toggle(bugData){
	return function(dispatch){
		bugData.isClosed = !bugData.isClosed;
		save(bugData)
			.then(toggledBug => {
				let action = { type : 'UPDATE', payload : toggledBug};
				dispatch(action);
			})
	}
}
		