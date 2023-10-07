const { Schema, model } = require("mongoose");
// Import date formatting middleware
const formatDate = require("../utils/formatDate");

// TODO: Not sure if this needs to be a model or not

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
