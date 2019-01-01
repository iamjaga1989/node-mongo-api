const {mongoose} = require ('./../db/mydb');

var Todo = mongoose.model('Todo', {
  text : {type : String,required: true},
  complete : {type : Boolean,default: false},
  completedAt : {type : Number, default : null}
});


module.exports = {Todo};
