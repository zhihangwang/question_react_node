import React from 'react';
import ReactDOM from "react-dom";
import  IssueList  from "./IssueList.jsx";
import { hot} from 'react-hot-loader'

const node = document.getElementById('example');

ReactDOM.render(
	<IssueList />,
	node
);

export default hot(module)(IssueList);