import mongoose from "mongoose";

const todoSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    checked: {
      type: Boolean,
      required: true,
    },
  },
  {
    timeStamps: true,
  }
);

export const Todo = mongoose.model("todos", todoSchema);
