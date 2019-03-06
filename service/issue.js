const validIssueStatus = {
    New: true,
    Open: true,
    Assign: true,
    Fixed: true,
    Verified: true,
    Close: true
}

const issueFieldType = {
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

module.exports = {
    validateIssue: validateIssue
}