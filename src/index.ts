import express, { Express, Request, Response } from "express";
import cors from "cors";
import SimplGit from "simple-git";
import bodyParser from "body-parser";
import path from "path";
import { generateId } from "./utils/generateId";
import { getAllFiles } from "./getAllFiles";
import { uploadFile } from "./aws";

const app: Express = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());
app.get("/", (req: Request, res: Response) => {
  res.send("Live from the server!");
});

app.post("/deploy", async (req: Request, res: Response) => {
  const repoUrl = req.body.repoUrl;
  const id = generateId();
  await SimplGit().clone(repoUrl, path.join(__dirname, `output/${id}`));

  const files = getAllFiles(path.join(__dirname, `output/${id}`));
  console.log(files);

  files.forEach(async file => {
    await uploadFile(file.slice(__dirname.length + 1), file)
  } )

  res.json({ id: id });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
