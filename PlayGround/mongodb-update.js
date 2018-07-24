//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp' , (err, db) => {
    if(err){
        return console.log('unable to connect to MongoDB server');
    }
    console.log('connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //    _id : new ObjectID('5b5786709d71ef3ddb9633aa')
    // }, {
    //     $set : {
    //         completed : true
    //     }
    // } , {
    //     returnOriginal : false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id : new ObjectID('5b57392dde060809b07aa5e3')
    } , {
         $set : {name : 'Abhishek'},
         $inc : { age : 1}
    } , {
        returnOriginal : false
    }).then((result) => {
        console.log(result);
    });


    db.close();
});