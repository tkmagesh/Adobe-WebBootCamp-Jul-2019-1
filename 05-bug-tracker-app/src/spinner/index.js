import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export function spinnerReducer(currentState = 0, action){
	if (action.type === 'UP') return currentState + action.payload;
	if (action.type === 'DOWN') return currentState - action.payload;
	return currentState;
}

export var spinnerActionCreators = {
	up(delta){
		let action = { type : 'UP', payload : delta};
		return action;
	},
	down(delta){
		let action = { type : 'DOWN', payload : delta};
		return action;	
	},
	doubleUp(delta){
		let action = { type : 'UP', payload : 2 * delta};
		return action;
	}
};

class Spinner extends Component{
	state = { delta : 0 };
	onUpClick = () => {
		this.props.up(this.state.delta);
	}
	onDoubleUpClick = () => {
		this.props.doubleUp(this.state.delta);
	}
	onDownClick = () => {
		this.props.down(this.state.delta);
	}
	render = () => {
		let { value } = this.props;
		return(
			<main>
				<label>Delta :</label>
				<input type="number" onChange={ evt => this.setState({ delta : evt.target.valueAsNumber || 1 }) }/>
				<br/>
				<input type="button" value="Decrement" onClick={this.onDownClick}/>
				<span> [ {value} ] </span>
				<input type="button" value="Increment" onClick={this.onUpClick}/>
				<input type="button" value="Double Increment" onClick={this.onDoubleUpClick} />
			</main>
		)
	}
}

function mapDispatchToProps(dispatch){
	let spinnerActionDispatchers = bindActionCreators(spinnerActionCreators, dispatch);
	return spinnerActionDispatchers;
}

function mapStateToProps(storeState){
	var spinnerValue = storeState.spinnerData;
	return { value : spinnerValue };	
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Spinner);





