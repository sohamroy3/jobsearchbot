'use strict'
var schema
// exports
module.exports.init = function (mongoose) {
  // creating primary schema
  let conversation = {
    sender: String,
    text: String,
    response: mongoose.Schema.Types.Mixed,
    timeStamp: String
  }

  mongoose.Schema(conversation)
  schema = mongoose.model('conversationSchema', conversation)
  return schema
}

module.exports.schema = schema
