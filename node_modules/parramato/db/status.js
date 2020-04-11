'use strict'
var schema
// exports
module.exports.init = function (mongoose) {
	// creating primary schema
	var stage = {
		text: [String],
		stage: String,
		type: String,
		next: mongoose.Schema.Types.Mixed
	};
	var stageSchema = mongoose.Schema(stage);
	var status = {
		sender: { type: String, unique: true, required: true, dropDups: true },
		tracker: Number,
		stuckCount: Number,
		previousOptions: mongoose.Schema.Types.Mixed,
		previousQuery: String,
		timestamp: String,
		stages: [stageSchema]
	};

	mongoose.Schema(status)
	schema = mongoose.model('statusSchema', status)
	return schema
}

module.exports.schema = schema