import express from "express";
import cors from "cors";
import { apiRouter } from "./routers/api";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", apiRouter);

app.get("/api", (_req, res) => {
  res.send("Welcome to the API!");
});

export default app;
