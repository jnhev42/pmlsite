import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.redirect('static/index.html');
});

app.use('/static', express.static('../frontend/public'));
app.use('/script', express.static('../frontend/dist'));

app.listen(port, () => {
  console.log(`server listening on http://localhost:${port}`);
});