var {ObjectID} = require('mongoose');

var {mongoose} = require('./../server/db/mongoose.js') ;
var {Todo} = require('./../server/models/todo.js');
var {User} = require('./../server/models/user.js');

//var id = '5b5b04fe710ce3c01e17613d';

// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// };

// Todo.find({_id : id}).then((todos) => {
//     console.log('Todos', todos);
// });
//
// Todo.findOne({_id : id}).then((todo) => {
//     console.log('Todo', todo);
// });
//
// Todo.findById(id).then((todo) => {
//     console.log('Todo by id' , todo);
// }).catch((e) => console.log(e));

var id = '5b5a05e35a1539bc2d9baba0';

User.findById(id).then((user) => {
    if(!user){
        return console.log('Unable to find user');
    }
    console.log('User by id' , user);
}).catch((e) => console.log(e));

