import React, { Component } from 'react';

export class BugEdit extends Component{
	state = { newBugName : ''};
	render = () => {
		let { addNew } = this.props,
			{ newBugName } = this.state;
		return(
			<section className="edit">
				<label htmlFor="">Bug Name :</label>
				<input type="text" onChange = { evt => this.setState({newBugName : evt.target.value})} />
				<input type="button" value="Add New" onClick={ () => addNew(newBugName) }/>
			</section>
		)
	}
}