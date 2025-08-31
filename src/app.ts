import express from "express";
import type { Application } from "express";
import cors from "cors";
import { authRoutes } from "./routes/auth.route";
import { userRoute } from "./routes/user.rout";

const app: Application = express();
app.use(express.json());
app.use(cors());

app.use("/auth", authRoutes);
app.use("/users", userRoute);

app.get("/", (_req, res) => {
  res.send("Welcome to the API!");
});

export default app;
