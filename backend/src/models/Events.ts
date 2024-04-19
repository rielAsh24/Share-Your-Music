import { Schema, model } from "mongoose";

const activity = new Schema({
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

export const Activities = model("Activities", activity);

export type Activity = {
  name: string;
  date: string;
};
