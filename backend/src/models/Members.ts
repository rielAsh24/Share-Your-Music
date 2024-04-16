import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    minLength: 2,
    maxLength: 20,
    required: true
  },
  email: {
    type: String,
    minLength: 8,
    required: true
  },
  password: {
    type: String,
    minLength: 8,
    required: true
  }
});

const Members = model("Members", userSchema);

export default Members;
