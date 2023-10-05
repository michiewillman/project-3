const { Schema, model } = require('mongoose');

const patientSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  availableSymptoms: [
    {
      type: String,
      trim: true,
    },
  ],
  medications: [
    {
      type: String,
      trim: true,
    },
  ],
  medications: [
    {
      type: String,
      trim: true,
    },
  ],
  conditions: [
    {
      type: String,
      trim: true,
    },
  ],
});

const Profile = model('Profile', patientSchema);

module.exports = Profile;
