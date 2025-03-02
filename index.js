import express from "express";
import "dotenv/config";

import cookieParser from "cookie-parser";
import errorHandler from "./middlewares/errorJandlere.middlewear.js";

import UserRouter from "./routes/auth.routes.js";
import connectDB from "./config/connect_db.js";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/users", UserRouter);

app.use(errorHandler);

const startServer = async () => {
  try {
    await connectDB();
    console.log("Connected to MongoDB");

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};

startServer();

export default app;
