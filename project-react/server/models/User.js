const { Schema, model } = require("mongoose");

const userSchema = new Schema({
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
    unique: true,
    match: [/.+@.+\..+/, "Must use a valid email address"],
  },
  password: {
    type: String,
    required: true,
  },
  // User's current medications
  medications: [
    {
      type: String,
      trim: true,
    },
  ],
  // All symptoms available in the user's symptom checklist
  symptoms: [
    {
      type: String,
      trim: true,
    },
  ],
});

// Hash the user's password for encryption
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// Compare & validate password for user log in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// Export the Patient object made from the schema
const User = model("User", userSchema);

module.exports = User;
