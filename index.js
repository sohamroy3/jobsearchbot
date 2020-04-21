var mongoose = require('mongoose');
 
// make a connection
mongoose.connect('mongodb://youruser:yourpassword@localhost:27017/job'); //youruser:yourpassword@
 
/// get reference to database
var db = mongoose.connection;
 
db.on('error', console.error.bind(console, 'connection error:'));
 
db.once('open', function() {
    console.log("Connection Successful!");
    
    // define Schema
    var BookSchema = mongoose.Schema({
      name: String,
      price: Number,
      quantity: Number
    });
 
    // compile schema to model
    var Book = mongoose.model('Book', BookSchema, 'bookstore');
 
    // documents array
    var books = [{ name: '1 Mongoose Tutorial', price: 10, quantity: 25 },
                    { name: '2 NodeJS tutorial', price: 15, quantity: 5 },
                    { name: '3 MongoDB Tutorial', price: 20, quantity: 2 }];
 
    // save multiple documents to the collection referenced by Book Model
    Book.collection.insert(books, function (err, docs) {
      if (err){ 
          return console.error(err);
      } else {
        console.log("Multiple documents inserted to Collection");
      }
    });
    
});

require("parramato").Server({
    root:"https://pixie.jubi.ai/jobsearchbot",//pixie link
    socketLocalPath: '/socket',///
    httpPort:4445,//server is running on port no 4445
    cluster:false,
    dbUri:'mongodb://root:root@127.0.0.1:27017/pigaro',//
    staticDirectory:__dirname+"/static",
    adapterPath:"/adapter",
    adapterDirectory:__dirname+"/adapter",
    projectId:"job_search_377703808087",///////////projectid changed
    dashbotKey:"VxtYPVW6168LIiXwqpIku9wE",
    directMultiplier:1,
    fallbackMultiplier:0.8,
    passphraseMiddleware:"YGUYGgyjgblgUGIYGIGkwhbiuashbo98u9283hr9h24rqIYGI932kbidbiadsYE",
    timeoutSeconds:60,
    fcmServerKey:"AAAAYTZC9WQ:APA91bFRmKa",
    firebaseWebConfig:{
        apiKey: "sd-ZrO9xKQ",
        authDomain: "on-f31.firebaseapp.com",
        databaseURL: "https://on-f31.firebaseio.com",
        projectId: "on-f31",
        storageBucket: "",
        messagingSenderId: "4175221234234"
    }
},()=>{
    //TO DO AFTER INITIALIZATION
})