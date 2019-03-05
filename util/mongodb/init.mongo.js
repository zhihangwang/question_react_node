var db =new Mongo.getDB("issuetracker");

db.issues.remove({});

db.issues.insert([{
    ststus:'Open',
    owner:'Ravan',
    created:new Date('2017-12-14'),
    effort:5,
    completionDate:undefined,
    title:'Error in console'
},
{
    ststus:'Assigned',
    owner:'Eddie',
    created:new Date('2017-12-19'),
    effort:14,
    completionDate:new Date('2018-01-11'),
    title:'Missing bottom border'
}]);

db.issues.createIndex({status:1});
db.issues.createIndex({owner:1});
db.issues.createIndex({created:1});