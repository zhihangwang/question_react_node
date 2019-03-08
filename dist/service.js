'use strict';

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongodb = require('mongodb');

require('babel-polyfill');

var _sourceMapSupport = require('source-map-support');

var _sourceMapSupport2 = _interopRequireDefault(_sourceMapSupport);

var _issue = require('./issue.js');

var _issue2 = _interopRequireDefault(_issue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var db = void 0;

_sourceMapSupport2.default.install();

var app = (0, _express2.default)();
app.use(_express2.default.static('static'));
app.use(_bodyParser2.default.json());

app.get('/api/issues', function (req, res) {
    db.collection('issues').find().toArray().then(function (issues) {
        var metadata = {
            total_count: issues.length
        };
        res.json({
            _metadata: metadata,
            _records: issues
        });
    }).catch(function (err) {
        res.status(500).json({
            message: 'Internal Service Error ' + err
        });
    });
});

app.post('/api/issues', function (req, res) {
    var newIssue = req.body;
    var valid = _issue2.default.validateIssue(newIssue);

    if (valid) {
        res.status(422).json({
            message: 'Invalid requrest: ' + valid
        });
        return;
    }

    db.collection('issues').insertOne(newIssue).then(function (result) {
        console.log(result);
        newIssue._id = result.insertedId;
        res.json(newIssue);
    }).catch(function (err) {
        console.log(err);
        res.status(500).json({
            message: 'Internal Service Error ' + err
        });
    });
});

_mongodb.MongoClient.connect('mongodb://localhost:27017').then(function (connection) {
    db = connection.db('issuetracker');
    app.listen(3000, function () {
        console.log('start 3000.');
    });
}).catch(function (err) {
    console.log('init mongodb error', err);
});
//# sourceMappingURL=service.js.map