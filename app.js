const {MongoClient,ObjectId} = require ('mongodb');

var url = "mongodb://localhost:27017/TodosApp";

MongoClient.connect (url, (err,client) => {

  if (err) return console.log ("NOT ABLE TO CONNECT TO DB");

  console.log ("CONNECTED to DB !!!");

  var db = client.db('TodosApp');

   // db.collection ("Todos").insertOne ({
   //   text : 'LEARN NODE JS',
   //   completed : false
   // }, (err, result) => {
   //   if (err) return console.log ("NOT ABLE TO INSERT TO TODOS");
   //   console.log (result.ops);
   // });

  // client.close();

  db.collection ('Todos').find ().toArray().then ( (res) => {
    console.log ("FTECH ALL RESULTS ",res);
  }, (err) => console.log ("not able to fetch records",res))


db.collection ('Todos').findOneAndUpdate (
  {_id : new ObjectId ('5c298af19577b80248e2547e')},
  {$set : {timetaken : 10}},
  {returnOriginal : false}
).then ( (result) => {console.log ("RESULT AFTER UPDATING IS ", result)})

db.collection ('Todos').findOneAndUpdate (
  {_id : new ObjectId ('5c298af19577b80248e2547e')},
  {$inc : {timetaken : 2}},
  {returnOriginal : false}
).then ( (result) => {console.log ("RESULT AFTER INCREMENTING IS ", result)})


})
