const mongoose = require("../db/db");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const UserMsg = mongoose.model("UserMsg", userSchema);

module.exports = UserMsg;
