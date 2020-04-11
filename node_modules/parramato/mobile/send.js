
"use strict"

// import dependencies
var request = require("request")
var FCM = require("fcm-push");

// user-defined dependencies
const EventEmitter = require("events")



let settings
// model class
class Sender extends EventEmitter { }

var sender = new Sender()
sender.setMaxListeners(Infinity)
module.exports = function (settingsMobile) {
  settings=settingsMobile
  sender.on("text|mobile", sendText)
  sender.on("option|mobile", sendOption)
  sender.on("persist-option|mobile", sendPersistOption)
  sender.on("generic|mobile", sendGeneric)
  return sender
}

function sendGeneric (recipientId, messageText, gender, profile, options, projectId) {
  var messageData = {
    mobileId: recipientId,
    botMessage: messageText,
    answerType: "generic",
    gender: gender,
    options: options,
    profile: profile,
    projectId:projectId
  }

    // console.log(JSON.stringify(messageData,null,3))
  callSendAPI(messageData)
}

function sendPersistOption (recipientId, messageText, gender, profile, options, projectId) {
  var messageData = {
    mobileId: recipientId,
    botMessage: messageText,
    answerType: "persist-option",
    gender: gender,
    options: options,
    profile: profile,
    projectId:projectId
  }

  callSendAPI(messageData)
}

function sendOption (recipientId, messageText, gender, profile, options, projectId) {
  var messageData = {
    mobileId: recipientId,
    botMessage: messageText,
    answerType: "option",
    gender: gender,
    options: options,
    profile: profile,
    projectId:projectId
  }

  callSendAPI(messageData)
}

function sendText (recipientId, messageText, gender, profile, projectId) {
  var messageData = {
    mobileId: recipientId,
    botMessage: messageText,
    answerType: "text",
    gender: gender,
    profile: profile,
    projectId:projectId
  }

  callSendAPI(messageData)
}

function callSendAPI (data) {
  callFireBase(settings.fcmKey,data.mobileId,data)

}  

function callFireBase(serverKey,deviceToken,messagedata){
    
    var fcm = new FCM(serverKey);

    messagedata.contentTitle = messagedata.projectId;
    messagedata.tickerText = messagedata.projectId;
    messagedata.message = messagedata.botMessage[0].value;

    var message = {
        to: deviceToken,
        mobile: {
          priority: "high",
          collapse_key: "New Message"
        },
        data: messagedata
    };
    
    
    fcm.send(message, function(err, response){
        if (err) {
        } else {
        }
    });
}



