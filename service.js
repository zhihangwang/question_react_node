const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(express.static('static'));
app.use(bodyParser.json());

const issues = [{
    id: 1,
    status: "Open",
    owner: 'fsfds',
    created: new Date(),
    effort: '',
    completionDate: undefined,
    title: 'fdsfdsf'
}, {
    id: 2,
    status: "Assign",
    owner: ';lk;lk;',
    created: new Date(),
    effort: '',
    completionDate: undefined,
    title: 'hgfhgfhfgh'
}];

app.get('/api/issues', (req, res) => {
    const metadata = {
        total_count: issues.length
    };
    res.json({
        _metadata: metadata,
        _records: issues
    });
});

app.post('/api/issues', (req, res) => {
    const newIssue = req.body;
    newIssue.id = issues.length + 1;
    newIssue.created = new Date();
    const valid = validateIssue(newIssue);
    if (valid) {
        res.status(422).json({
            message: `Invalid requrest: ${valid}`
        });
        return;
    }
    issues.push(newIssue);
    const metadata = {
        total_count: issues.length
    };
    res.json(newIssue);
});

const validIssueStatus = {
    New: true,
    Open: true,
    Assign: true,
    Fixed: true,
    Verified: true,
    Close: true
}

const issueFieldType = {
    id: 'required',
    status: 'required',
    owner: 'required',
    created: 'required',
    effort: 'optional',
    completionDate: 'optional',
    title: 'required',
}

function validateIssue(issue) {
    for (const field in issueFieldType) {
        const type = issueFieldType[field];
        if (!type) {
            delete issue[field]
        } else if (type == 'required' && !issue[field]) {
            return `${field} is required.`;
        }
    }

    if (!validIssueStatus[issue.status]) {
        return `${field} is not a valid status.`;
    }
    return null;
}

app.listen(3000, function () {

    console.log('start 3000.');
});