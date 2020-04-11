const userSchema = require('./user.js')
const conversationSchema = require('./conversation.js')
const statusSchema = require('./status.js')
const engine = require('./engine.js')
module.exports = function (mongoose) {
    return { schemas: { user: userSchema.init(mongoose), conversation: conversationSchema.init(mongoose), status: statusSchema.init(mongoose) }, engine: engine }
}










