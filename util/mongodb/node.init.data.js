var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;

    var dbo = db.db("issuetracker");
    var myobj = [{
            status: 'Open',
            owner: 'Ravan',
            created: new Date('2017-12-14'),
            effort: 5,
            completionDate: undefined,
            title: 'Error in console'
        },
        {
            status: 'Assigned',
            owner: 'Eddie',
            created: new Date('2017-12-19'),
            effort: 14,
            completionDate: new Date('2018-01-11'),
            title: 'Missing bottom border'
        }
    ];
    dbo.collection("issues").insertMany(myobj, function(err, res) {
        if (err) throw err;
        dbo.collection('issues').createIndex({
            status: 1,
            owner: 1,
            created: 1
        }, null, function(err, results) {
            console.log("插入的文档数量为: " + res.insertedCount);
            db.close();
        });
    });
});