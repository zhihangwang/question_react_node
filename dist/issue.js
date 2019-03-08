'use strict';

var validIssueStatus = {
    New: true,
    Open: true,
    Assign: true,
    Fixed: true,
    Verified: true,
    Close: true
};

var issueFieldType = {
    status: 'required',
    owner: 'required',
    created: 'required',
    effort: 'optional',
    completionDate: 'optional',
    title: 'required'
};

function validateIssue(issue) {
    for (var _field in issueFieldType) {
        var type = issueFieldType[_field];
        if (!type) {
            delete issue[_field];
        } else if (type == 'required' && !issue[_field]) {
            return _field + ' is required.';
        }
    }

    if (!validIssueStatus[issue.status]) {
        return field + ' is not a valid status.';
    }
    return null;
}

module.exports = {
    validateIssue: validateIssue
};
//# sourceMappingURL=issue.js.map