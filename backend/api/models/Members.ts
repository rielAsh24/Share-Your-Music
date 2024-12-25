import { Schema, model } from "mongoose";

const memberSchema = new Schema({
  name: {
    type: String,
    minLength: 2,
    maxLength: 20,
    required: true
  },
  _id: {
    type: String,
    minLength: 8
  },
  password: {
    type: String,
    minLength: 8,
    required: true
  },
  role: {
    type: String,
    enum: ["admin", "member"],
    default: "member",
    required: true
  }
});

export const Members = model("Members", memberSchema);

export type Member = {
  name: string;
  email: string;
  password?: string;
  role?: "member" | "admin";
};

export type Profile = {
  email: string;
  role?: "member" | "admin";
};
