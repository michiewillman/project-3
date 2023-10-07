const { Schema, model } = require("mongoose");
// Import date formatting middleware
const formatDate = require("../utils/formatDate");

// Symptom logs for each day and time reported for a specific Patient
const symptomLogSchema = new Schema({
  patientId: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
    get: (timestamp) => formatDate(timestamp),
  },
  symptomName: {
    type: String,
  },
  severity: {
    type: Number,
  },
});

const Symptom = model("Symptom", symptomLogSchema);

module.exports = Symptom;
