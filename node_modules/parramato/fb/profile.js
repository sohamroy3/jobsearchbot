
'use strict'

// import dependencies
var request = require('request')

// user-defined dependencies
const EventEmitter = require('events')

// model class
class Profile extends EventEmitter { }

var profile = new Profile()
profile.setMaxListeners(Infinity)



var dbAccess
var schema

module.exports = function (db, fbSchema, projectId) {
  // facebook auth
  dbAccess = db
  schema = fbSchema
  profile.on('userProfile' + projectId + "|fb", getUserProfile)
  return profile
}

function getUserProfile(senderId, callback) {
  if (senderId && senderId.split("|").length == 2) {
    senderId = senderId.split("|")[0]
    let projectId = senderId.split("|")[1]
    let model = {};
    model.data = {
      projectId: projectId
    }
    // console.log("READ SETTINGS")    
    dbOp({
      data: {
        schema: schema,
        dbOpsType: "read",
        data: model.data
      }
    }).then((doc) => {
      if (doc && doc.length > 0) {
        request({
          url: 'https://graph.facebook.com/v2.6/' + senderId,
          qs: { fields: 'first_name,last_name,profile_pic,locale,timezone,gender', access_token: doc[0].settings.pageAccessToken }
        },
          (err, response, body) => { callback(err, response, body) })
      }
      return reject("No settings found")
    })
      .then((data) => {
        // console.log("FB PROFILE READ SETTINGS DONE")
      })
      .catch(e => console.log(e))
  }
}

function dbOp(model) {
  return new Promise(function (resolve, reject) {
    let passData = {};
    if (model.data.dbOpsType === "read") {
      model.data.readLimit = 10;
      model.data.offset = 0;
    }
    dbAccess(model.data, (err, doc) => {
      if (err) {
        return reject(err);
      }
      passData.doc = doc;
      return resolve(passData);
    });
  })
}