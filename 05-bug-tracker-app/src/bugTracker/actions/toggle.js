export function toggle(bug){
	bug.isClosed = !bug.isClosed;
	let action = { type : 'UPDATE', payload : bug};
	return action;
}