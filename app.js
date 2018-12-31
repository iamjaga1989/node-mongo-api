const mongoClient = require ('mongodb').MongoClient;

var url = "mongodb://localhost:27017/TodosApp";

mongoClient.connect (url, (err,client) => {

  if (err) return console.log ("NOT ABLE TO CONNECT TO DB");

  console.log ("CONNECTED to DB !!!");

  var db = client.db('TodosApp');

   db.collection ("Todos").insertOne ({
     text : 'LEARN NODE JS',
     completed : false
   }, (err, result) => {
     if (err) return console.log ("NOT ABLE TO INSERT TO TODOS");
     console.log (result.ops);
   });

  // client.close();

  db.collection ('Todos').find ().toArray().then ( (res) => {
    console.log (res);
  }, (err) => console.log ("not able to fetch records",res))

})
