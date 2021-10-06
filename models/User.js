const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchemer = new Schema({
  googleId: String,
});

mongoose.model("users", userSchemer);
