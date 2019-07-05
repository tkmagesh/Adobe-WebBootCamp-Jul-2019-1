import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { BugStats } from './views/bugStats';
import { BugEdit } from './views/bugEdit';
import { BugSort } from './views/bugSort';
import { BugList } from './views/bugList';

import * as bugActionCreators from './actions';

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

function mapDispatchToProps(dispatch){
	var bugActionDispatchers = bindActionCreators(bugActionCreators, dispatch);
	return bugActionDispatchers;
}

function mapStateToProps({ bugsData, spinnerData }){
	let bugs = bugsData.filter((bug, index) => index % 2 === spinnerData % 2);
	return { bugs : bugs };
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BugTracker);




