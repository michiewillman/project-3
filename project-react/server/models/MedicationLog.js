const { Schema, model } = require("mongoose");

// TODO: Not sure if this needs to be a model or not

// Medication logs for each Patient with a timestamp of when they took the medication
const medicationLogSchema = new Schema({
  patientId: {
    type: Number,
    required: true,
  },
  medicationName: {
    type: String,
  },
  dosage: {
    type: String,
  },
  timestamp: {
    type: String,
  },
});

module.exports = medicationLogSchema;
