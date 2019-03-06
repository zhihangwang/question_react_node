const bodyParser = require('body-parser');
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const Issue = require('./issue.js');

let db;

const app = express();
app.use(express.static('static'));
app.use(bodyParser.json());

app.get('/api/issues', (req, res) => {
    db.collection('issues').find().toArray().then(issues => {
        const metadata = {
            total_count: issues.length
        };
        res.json({
            _metadata: metadata,
            _records: issues
        });
    }).catch(err => {
        res.status(500).json({
            message: `Internal Service Error ${err}`
        });
    });
});

app.post('/api/issues', (req, res) => {
    const newIssue = req.body;
    const valid = Issue.validateIssue(newIssue);

    if (valid) {
        res.status(422).json({
            message: `Invalid requrest: ${valid}`
        });
        return;
    }

    db.collection('issues').insertOne(newIssue).then(result => {
        console.log(result)
        newIssue._id = result.insertedId;
        res.json(newIssue);
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            message: `Internal Service Error ${err}`
        });
    });
});

MongoClient.connect('mongodb://localhost:27017').then(connection => {
    db = connection.db('issuetracker');
    app.listen(3000, function() {
        console.log('start 3000.');
    });
}).catch((err) => {
    console.log('init mongodb error', err);
});