import React, { Component } from 'react';
import { BugStats } from './views/bugStats';
import { BugEdit } from './views/bugEdit';
import { BugSort } from './views/bugSort';
import { BugList } from './views/bugList';

class BugTracker extends Component{
	render = () => {
		let { bugs, toggle,removeClosed, addNew } = this.props;
		return(
			<>
				<BugStats bugs={bugs} />
				<BugSort />
				<BugEdit addNew={addNew} />
				<BugList {...{toggle, removeClosed, bugs}} />
			</>
		)
	}
}

export default BugTracker;