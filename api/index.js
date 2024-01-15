import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
  console.log("MongoDB Connected");
});
const app = express();

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

/*app.get("/", (req, res) => {
  res.json({
    message: "Api is working!",
  });
});
*/

//above code with app stands for instance/object/class for Express Application a framework for Node.js

app.use("/api/user", userRoutes);
