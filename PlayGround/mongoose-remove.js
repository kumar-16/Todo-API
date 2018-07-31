var {ObjectID} = require('mongoose');

var {mongoose} = require('./../server/db/mongoose.js') ;
var {Todo} = require('./../server/models/todo.js');
var {User} = require('./../server/models/user.js');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findByIdAndRemove('5b5b07f3710ce3c01e17613e').then((todo) => {
    console.log(todo);
});

Todo.findOneAndRemove({_id : '5b5a3d9dac08159018945061'}).then((todo) => {
    console.log(todo);
});