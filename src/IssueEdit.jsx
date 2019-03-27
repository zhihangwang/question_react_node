import React from 'react';
import {Link} from 'react-router-dom';

export default class IssueEdit extends React.Component{
    render(){
        return <div>
            <p>this is edit page.{this.props.match.params.id}</p>
            <Link to='/issues'>Back to issues list></Link>
        </div>
    }
}
