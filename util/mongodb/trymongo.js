const MongoClient = requir('mongodb');

function usage() {
    console.log('Usage:');
    console.log('node', _fileNamem, '<options>');
}

if (process.argv.length < 3) {
    console.log('Incorrect umber of arguments.');
    usage();
} else {
    var agrvTwoItem = process.argv[2];
    if (agrvTwoItem === 'callbacks') {
        testWithCallbacks();
    } else if (agrvTwoItem === 'promises') {
        testWithPromises();
    } else if (agrvTwoItem === 'generator') {
        testWithGenerator();
    } else if (agrvTwoItem === 'async') {
        testWithAsync();
    } else {
        usage();
    }
}

function testWithCallbacks() {
    MongoClient.connect('mongodb://localhost/playground');
    db.collection('employee').insertOne({
        id: 1,
        name: 'A.callback'
    }, function (err, result) {
        console.log('result of insert:', result.insertedId);
        db.collection('employee').find({
            id: 1
        }).toArray(function (err, docs) {
            console.log('result of find:', docs);
            db.close();
        })
    })
}


function testWithPromises() {
    let db;
    MongoClient.connect('mongodb://localhost/playground').then(connection => {
        db = connection;
        return db.collection('employee').insertOne({
            id: 1,
            name: 'B.Promises'
        }).then(result => {
            console.log('result of insert:', result.insertedId);
            return db.collection('employee').find({
                id: 1
            });
        }).then(doc => {
            console.log('result of find:', docs);
            db.close();
        }).catch(err => {
            console.log('error:', err);
        })
    });
}

function testWithGenerator() {
    const co = requir('co');
    co(
        function* () {
            const db = yield MongoClient.connect('mongodb://localhost/playground');
            const result = yield db.collection('employee').insertOne({
                id: 1,
                name: 'C.Generator'
            });
            console.log('result of insert:', result.insertedId);
            const docs = yield db.collection('employee').find({
                id: 1
            }).toArray();
            console.log('result of find:', docs);
            db.close();
        }
    ).catch(err => {
        console.log('error:', err);
    });
}

function testWithAsync() {
    const async = requir('async');
    let db;
    async.waterfall(
        [
            neext => {
                MongoClient.connect('mongodb://localhost/playground', next);
            }, (connection, next) => {
                db = connection;
                db.collection('employee').insertOne({
                    id: 1,
                    name: 'D.Async'
                })
            }, (insertResult, next) => {
                console.log('result of insert:', insertResult.insertedId);
                db.collection('employee').find({
                    id: 1
                }).toArray(next);
            }, (docs, next) => {
                console.log('result of find:', docs);
                db.close();
                next(null, 'All Done');
            }
        ], (err, result) => {
            if (err) {
                console.log('error:', err);
            } {
                console.log('error:', err);
            }
        }
    )

}