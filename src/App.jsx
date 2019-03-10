import React from 'react';
import ReactDOM from "react-dom";
import { hot } from 'react-hot-loader'
import { BrowserRouter as Router, Route ,Redirect} from 'react-router-dom';

import IssueList from "./IssueList.jsx";
import IssueEdit from "./IssueEdit.jsx";

const node = document.getElementById('example');
const NoMatch = () => <p>Page Not Found.</p>

const RoutedApp = () => {
	return <Router >
		<div>	
			<Redirect from='/' to='issues'/>
			<Route path="/issues" component={IssueList} />
			<Route path="/issuesDetail/:id" component={IssueEdit} />
		</div>
	</Router>
}

ReactDOM.render(
	<RoutedApp />,
	node
);

export default hot(module)(IssueList);