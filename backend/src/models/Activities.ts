import { Schema, model } from "mongoose";

const activitiesSchema = new Schema({
  name: {
    type: String,
    minLength: 10,
    maxLength: 30,
    required: true
  },
  date: {
    type: Date,
    default: () => Date.now(),
    required: true
  },
  description: {
    type: String,
    minLength: 20,
    maxLength: 200
  }
});

const Activities = model("Activities", activitiesSchema);

export default Activities;
