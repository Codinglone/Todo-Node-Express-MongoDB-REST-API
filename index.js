import express from "express";
import { PORT } from "./config.js";
import { mongooseURL } from "./config.js";
import { router } from "./routes/todo.routes.js";
import mongoose from "mongoose";
const app = express();

app.use(express.json())
app.use("/todo", router);
mongoose
  .connect(mongooseURL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Todo app is listening on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
