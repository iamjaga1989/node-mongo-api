const express = require ('express');
const bodyParser = require ('body-parser');
const {Todo} = require ('./../model/todo');

var app = express ();
var port = process.env.PORT || 3000;

app.use (bodyParser.json());

app.post ('/api/todos', (req,res) => {
  var todoNew = new Todo({
    text : req.body.text
  });

  todoNew.save ().then ( (result) => res.send(result),
    (err) => res.status(400).send(err)
  )
});

app.listen (port, () => {console.log ("SERVER STARTED AT ",port)})
