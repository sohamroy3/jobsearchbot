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

////////////////////////////button syntax

  ////
  

///////////////////////BUTTON
name:(model)=>{
  console.log(model, "Rollover Pre..name........!")

      return new Promise(function(resolve, reject){
          try{
              if (model.tags.start == "salutation"){
                  model.reply = {
                  type: 'button',
                  text: "And how should I address you 😊 ?",
                  next: {
                      data: [
                          {
                              data: "male|Mr",
                              text: "Mr."
                          },
                          {
                              data: "female|Ms",
                              text: "Ms."
                          },
                          {
                              data: "female|Mrs",
                              text: "Mrs."
                          },
                      ]
                  }
              }
              }
              else if(model.tags.start == "tryAgain"){
                  model.reply={
                      type : "text",
                      text : model.tags.reEnterName,
                  }
              }
              else{
                  model.reply=model.data
                  model.reply.type="text"
              }
              resolve(model)
          }
          catch(e){
              reject(model)
          }
      })
  },
