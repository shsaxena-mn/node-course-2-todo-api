const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err ,db)=>{
if(err){
    return console.log('Unable to connect to Mongo Server');
}
console.log('connected to mongo DB');


// db.collection('Todos').insertOne({
//     text:'Some TODO',
//     completed:false
    
//     },(error,result)=>{
//     if(error){
//         return console.log('Unable to insert todos',error);
//     }
//     console.log(JSON.stringify(result.ops,undefined,2));
//     });

db.collection('User').insertOne({
    name: 'shashank saxrna',
    age: 24,
    location: 'lucknow'
    
    },(error,result)=>{
    if(error){
        return console.log('Unable to insert User',error);
    }
    console.log(JSON.stringify(result.ops[1],undefined,2));
    });


db.close();
});

