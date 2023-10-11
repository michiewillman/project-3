const { Schema, model } = require("mongoose");
// Import date formatting middleware
const formatDate = require("../utils/formatDate");

// Symptom logs for each day and time reported for a specific User
const symptomLogSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  datetime: {
    type: Date,
    default: Date.now,
    get: (timestamp) => formatDate(timestamp),
    required: true,
  },
  symptomName: {
    type: String,
    required: true,
  },
  severity: {
    type: Number,
    required: true,
  },
});

const Symptom = model("Symptom", symptomLogSchema);

module.exports = Symptom;
