import express, { Express, Request, Response } from 'express';
import cors from 'cors';

const app: Express = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.get('/', (req: Request, res: Response) => {
  res.send('Live from the server!');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
