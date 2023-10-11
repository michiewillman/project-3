const { Schema, model } = require("mongoose");
// Import date formatting middleware
const formatDate = require("../utils/formatDate");

// Medication logs for each User with a timestamp of when they took the medication
const medicationLogSchema = new Schema({
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
  medicationName: {
    type: String,
    required: true,
  },
  dosage: {
    type: String,
  },
});

const MedicationLog = model("Medication", medicationLogSchema);

module.exports = MedicationLog;
