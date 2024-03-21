import express, { Express, Request, Response } from "express";
import cors from "cors";

import { generateId } from "./utils/generateId";

const app: Express = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.get("/", (req: Request, res: Response) => {
  res.send("Live from the server!");
});

app.post("/deploy", async (req: Request, res: Response) => {
  const repoUrl = req.body.repoUrl;
  const id = generateId();
  res.json({});
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
