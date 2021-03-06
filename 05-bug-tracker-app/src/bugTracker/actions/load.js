
import { getAll } from '../services/bugApi';

/*
function getExistingData(){
	var data = [
		{
	      "id": 1,
	      "name": "Bug - 1",
	      "isClosed": true,
	      "createdAt": "2019-05-24T11:27:25.515Z",
	      "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur aliquam id pariatur ipsa expedita nesciunt doloribus facilis architecto quisquam totam veniam odio, minima, labore deleniti, neque nam quia amet eveniet."
	    }
	];
	return data;
}

//Sync
export function load(){
	let data = getExistingData()
	let action = { type : 'LOAD', payload : data};
	return action;	
}*/

export function load(){
	return function(dispatch){
		getAll()
		.then(bugs => {
			let action = { type : 'LOAD', payload : bugs};
			dispatch(action);
		});
	}
}