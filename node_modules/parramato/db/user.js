'use strict'
var schema
// exports
module.exports.init = function (mongoose) {
  // creating primary schema
  let user = {
    sender: { type: String, unique: true, required: true, dropDups: true },
    stage: String,
    intent: String,
    stageData: mongoose.Schema.Types.Mixed,
    timestamp: String,
    callback: String,
    universal: String,
    channel: String,
    block: Boolean,
    tags: mongoose.Schema.Types.Mixed
  }

  mongoose.Schema(user)
  schema = mongoose.model('userSchema', user)
  return schema
}

module.exports.schema = schema
