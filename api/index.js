import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import path from "path";
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
  console.log("MongoDB Connected");
});
const app = express();

app.use(express.json());
// you're telling your Express app to apply this middleware to all incoming requests, so that if the request has a JSON body, it will be parsed into a JavaScript object that you can work with in your route handlers.

app.use(cookieParser());

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
app.use("/api/auth", authRoutes);

// creating midware below to getting statuscode errors

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
  next(error);
});
