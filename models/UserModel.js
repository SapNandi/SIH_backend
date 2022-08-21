const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "teacher",
    },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("Users", UserSchema);

module.exports = UserModel;