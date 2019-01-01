const mongoose = require ('mongoose');

var url = "mongodb://localhost:27017/TodosApp";
mongoose.promise = global.promise;
mongoose.connect (url);

//mongoose automatically  takes care of managing queries after this
//unlike monogdb native which has callback

//creates a model on which we can save
//requires name and object
module.exports = {mongoose};
