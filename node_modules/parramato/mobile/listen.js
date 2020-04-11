
"use strict"

// user-defined dependencies
const EventEmitter = require("events")

// model class
class Listener extends EventEmitter { }
var listener = new Listener()
listener.setMaxListeners(Infinity)
  
const recipientID = "jubiAiAndroid"


module.exports = function (app,settings) {
    app.post(settings.path, (req, res) => { processRequests(req, res, listener) })
    return listener
}

function processRequests (req, res, listener) {
  let event = req.body
  var timeOfMessage = new Date().getTime()
  if (event.lastAnswer) {
    listener.emit("text|mobile", {projectId:event.projectId,data: {text: event.lastAnswer}, sender: event.mobileId, recipient: recipientID, time: timeOfMessage})
  }  else if(event.type=="attachment"){
    listener.emit("attachment|mobile", {projectId:event.projectId,data: {url: event.url}, sender: event.mobileId, recipient: recipientID, time: timeOfMessage})
  } else {
    listener.emit("error|mobile", {status: "Unknown message type"})
  }
  res.json({status : "success"})
}
