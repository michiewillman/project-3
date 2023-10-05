const { Schema, model } = require("mongoose");

const providerSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  // Where the Provider practices (name of office or hospital)
  practice: {
    type: String,
    required: true,
  },
  // All patients belonging to the Provider
  patients: [
    {
      type: String,
      trim: true,
    },
  ],
});

// Export the Patient object made from the schema
const Provider = model("Provider", providerSchema);

module.exports = Provider;
