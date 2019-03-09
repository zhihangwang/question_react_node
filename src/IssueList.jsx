import React from 'react';
import 'whatwg-fetch';
import IssueFilter from "./IssueFilter.jsx";
import IssueAdd from "./IssueAdd.jsx";

const IssueRow = (props) => (
    <tr>
        <td >{props.issue._id}</td>
        <td >{props.issue.status}</td>
        <td >{props.issue.owner}</td>
        <td >{props.issue.created.toDateString()}</td>
        <td >{props.issue.effort}</td>
        <td >{props.issue.completionDate ? props.issue.completionDate.toDateString() : ''}</td>
        <td >{props.issue.title}</td>
    </tr>
);

function IssueTable(props) {
    const issueRows = props.issues.map(issue => <IssueRow key={issue._id} issue={issue} />);
    return (<table style={{ border: '1px' }}>
        <thead>
            <tr>
                <td >Id</td>
                <td >status</td>
                <td >owner</td>
                <td >created</td>
                <td >effort</td>
                <td >completionDate</td>
                <td >Title</td>
            </tr>
        </thead>
        <tbody>
            {issueRows}
        </tbody>
    </table>);
}

export default class IssueList extends React.Component {
    constructor() {
        super();
        let self = this;
        self.state = { issues: [] };
        self.createIssue = self.createIssue.bind(self);
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        fetch('/api/issues').then(response => response.json()).then((rawData) => {
            rawData._records.forEach(issue => {
                issue.created = new Date(issue.created);
                if (issue.completionDate) {
                    issue.completionDate = new Date(issue.completionDate);
                }
            });
            this.setState({ issues: rawData._records })
        }).catch((err) => {
            console.log(err);
        });
    }

    createIssue(formData) {
        let newIssue =
        {
            status: "New",
            owner: formData.owner,
            created: new Date(),
            effort: '',
            completionDate: undefined,
            title: formData.title
        };
        fetch('/api/issues', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newIssue)
        }).then(response => {
            if (response.ok) {
                response.json().then((rawData) => {
                    rawData.created = new Date(rawData.created);
                    if (rawData.completionDate) {
                        rawData.completionDate = new Date(issue.completionDate);
                    }
                    let newIssues = this.state.issues.concat(rawData);
                    this.setState({ issues: newIssues });
                });
            } else {
                response.json().then(error => {
                    console.log(error.message);
                });
            }
        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        let self = this;
        return <div>
            <h1>Issue Tracker</h1>
            <IssueFilter />
            <hr />
            {<IssueTable issues={self.state.issues} />}
            <hr />
            <IssueAdd createIssue={self.createIssue} />
        </div>
    }
}