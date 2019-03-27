import React from 'react';
import {Link} from 'react-router-dom';

export default class IssueFilter extends React.Component {
	render() {
		const Separator=()=><span> | </span>;
		return <div>
			<Link to='/Issues'>All Issues</Link>
			<Separator/>
			<Link to={{pathname:'/issues',search:'?status=Open'}}>Open Issues</Link>
			<Separator/>
			<Link to={{pathname:'/issues',search:'?status=New'}}>New Issues</Link>
		</div>
	}
}