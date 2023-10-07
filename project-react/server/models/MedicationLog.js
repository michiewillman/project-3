const { Schema, model } = require("mongoose");
// Import date formatting middleware
const formatDate = require("../utils/formatDate");

// Medication logs for each Patient with a timestamp of when they took the medication
const medicationLogSchema = new Schema({
  patientId: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
    get: (timestamp) => formatDate(timestamp),
  },
  medicationName: {
    type: String,
  },
  dosage: {
    type: String,
  },
});

const Medication = model("Medication", medicationLogSchema);

module.exports = Medication;
