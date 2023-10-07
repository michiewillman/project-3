const { Schema, model } = require("mongoose");

// TODO: Not sure if this needs to be a model or not

// Symptom logs for each day and time reported for a specific Patient
const symptomLogSchema = new Schema({
  patientId: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
  },
  symptomName: {
    type: String,
  },
  severity: {
    type: Number,
  },
});

module.exports = symptomLogSchema;
