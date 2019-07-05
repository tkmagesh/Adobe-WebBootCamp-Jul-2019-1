import React, { Component } from 'react';

export class BugItem extends Component{
	render = () => {
		let { bug, toggle } = this.props;
		return(
			<li>{
					bug.isClosed ? 
					(
						<span className="bugname closed" onClick={() => toggle(bug) }>
							{bug.name}
						</span>
					) : 
					(	<span className="bugname" onClick={() => toggle(bug) }>
							{bug.name}
						</span>
					)
				}
				<div>{bug.isClosed.toString()}</div>
				<div className="datetime">{bug.createdAt.toString()}</div>
			</li>
		)
	}
}