import bodyParser from 'body-parser';
import express from 'express';
import { MongoClient } from 'mongodb';
import 'babel-polyfill';
import sourceMapSupport from 'source-map-support';
import Issue from './issue.js';

let db;

sourceMapSupport.install();




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
        newIssue._id = result.insertedId;
        res.json(newIssue);
    }).catch(err => {
        res.status(500).json({
            message: `Internal Service Error ${err}`
        });
    });
});

MongoClient.connect(
    'mongodb://localhost:27017', { useNewUrlParser: true }).then(connection => {
    db = connection.db('issuetracker');
    app.listen(3000, function() {
        console.log('start 3000.');
    });
}).catch((err) => {
    console.log('init mongodb error', err);
});