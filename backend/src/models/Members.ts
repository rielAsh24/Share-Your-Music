import { Schema, model } from "mongoose";

const memberSchema = new Schema({
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
  },
  role: {
    type: String,
    enum: ["admin", "member"],
    default: "member"
  }
});

export const Members = model("Members", memberSchema);

export type Member = {
  name: string;
  email: string;
  password?: string;
};
