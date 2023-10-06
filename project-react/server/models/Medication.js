const { Schema, model } = require("mongoose");

// TODO: Not sure if this needs to be a model or not
const medicationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  dosage: {
    type: String,
  },
  patientId: {
    type: Number,
    required: true,
  },
  entries: {
    type: String,
  },
});

module.exports = medicationSchema;
