const { Schema, model } = require("mongoose");

// Symptoms reported in one day evaluation
const daySchema = new Schema({
  date: {
    type: Date,
    required: true,
  },
  mentalState: {
    type: String,
    required: true,
  },
  symptoms: {
    type: String,
    required: true,
  },
  // each symptoms rated on severity ???
});
